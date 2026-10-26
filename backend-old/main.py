from pydantic import BaseModel, Field
from fastapi import FastAPI
app = FastAPI()



class ContactSubmission(BaseModel):
    email: str = Field(pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    name: str
    message: str

contacts : list[ContactSubmission] = [];

@app.post("/api/contact")
def contactForm(data: ContactSubmission):
    contacts.append(data)
    print(data)