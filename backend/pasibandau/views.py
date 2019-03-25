from django.shortcuts import render, redirect
from django.http import HttpResponse
from testas import dboperations
# Create your views here.

dalykai = [
        {
            'pavadinimas': 'zvejotojas',
            'data': 'siandien'
        },
        {
            'pavadinimas': 'vairuotojas',
            'data': 'rytoj',
        }
    ]

def home(request):
    #dictionary =  {
    #    'context': dalykai,
    #    'title': 'pavadinimas'
   #  } 
    #dboperations.create(8, 'laba diena', 'aprasymas')
    return render(request, 'pasibandau/home.html')

def redirect_to_home(request):
    response = redirect('home/')
    return response


