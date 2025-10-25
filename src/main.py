from fastapi import FastAPI
from huggingface_hub import InferenceClient
import os
import requests
from dotenv import load_dotenv
import google.generativeai as genai
from PIL import Image
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()

# import country code from .env
country_code = os.getenv("COUNTRY_CODE")

client = InferenceClient(
    "mistralai/Mistral-7B-Instruct-v0.3",
    token = os.getenv("HF_TOKEN"),
)

history = [{"role": "user", "content": "Conversation must always focus on giving fashion advice based on the user's preference. Any diveragance should be redirected."}]

genai.configure(api_key=os.getenv("GEMINI_TOKEN"))
model = genai.GenerativeModel('gemini-2.5-flash-image-preview')

image1_path = "./public/woman_standing.png"
image2_path = "./public/coat.png"
prompt = "Make the woman in the first picture wear the piece of clothing in the" \
" second picture. The coat should fit realistically on the woman"
output_filename = "result.png"

def save_image_from_response(response, filename):
    """Helper function to save the image from the API response."""
    if response.candidates and response.candidates[0].content.parts:
        for part in response.candidates[0].content.parts:
            if part.inline_data:
                image_data = BytesIO(part.inline_data.data)
                img = Image.open(image_data)
                img.save(filename)
                print(f"Image successfully saved as {filename}")
                return filename
    print("No image data found in the response.")
    return None

app = FastAPI()
# CORS(app,
#      resources={r"/api/*": { 
#         "origins": "*",
#         "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
#         "allow_headers": ["Content-Type", "Authorization"],
#                             },
#                 },
#      supports_credentials=False)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[ 
    "http://localhost:5174",
    "http://127.0.0.1:5174"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return "index.html"

class ChatRequest(BaseModel):
    message: str

@app.put("/api/chat")
def chat(req: ChatRequest):
    user_message = req.message
    print(user_message)
    history.append({"role":"user", "content": user_message})

    print(history)

    response = client.chat.completions.create(
        model = "mistralai/Mistral-7B-Instruct-v0.3",
        messages = history,
        max_tokens= 256,
    
    )
    
    reply = response.choices[0].message["content"]

    print(reply)
    history.append({"roles":"assistant", "content": reply})
    
    return {"reply" : reply}

@app.put("/api/avatar")
def avatar():
    print(f"Fusing images '{image1_path}' and '{image2_path}'...")
    try:
        img1 = Image.open(image1_path)
        img2 = Image.open(image2_path)
        response = model.generate_content([prompt, img1, img2])
        print(response)
        save_image_from_response(response, output_filename)
    except FileNotFoundError:
        print("Error: One or both image files were not found.")
    return jsonify({"output": output_filename})

