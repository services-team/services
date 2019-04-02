from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from .models import Service
from .serializers import ServiceSerializer
from testas import dboperations

# Create your views here.


def home(request):
    dboperations.create(0, "ir vel pridetas", "tik si kart trecias", -1, 1)
    return HttpResponse("<h1>" + "aa" + "</h1>")
