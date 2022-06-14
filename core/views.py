from django.shortcuts import render
from requests import HttpResponse
import random

# se crea las vistas y se llama por cada pagina html creada.

def index(request):
    return render(request,'core/index.html')

def footer(request):
    return render(request,'core/menu/footer.html')

def nav(request):
    return render(request,'core/menu/nav.html')

def bandana(request):
    return render(request,'core/pages/bandana.html')

def contacto(request):
    return render(request,'core//pages/contacto.html')

def correas(request):
    return render(request,'core/pages/correas.html')

def donaciones(request):
    return render(request,'core/pages/donaciones.html')

def indentificaciones(request):
    return render(request,'core/pages/indentificaciones.html')

def inicio(request):
    return render(request,'core/pages/inicio.html')

def nosotros(request):
    return render(request,'core/pages/nosotros.html')

def Seguimiento(request):
    return render(request,'core/pages/Seguimiento.html')

def tienda(request):
    return render(request,'core/pages/tienda.html')




