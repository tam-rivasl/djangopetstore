from django.urls import path
from .views import contacto, index, bandana, correas, donaciones, indentificaciones, inicio, nosotros, Seguimiento, tienda, nav, footer

urlpatterns =[
    path('', index, name ="index"),
    path('', bandana, name="bandana" ),
    path('', contacto, name="contacto" ),
    path('', correas, name="correas" ),
    path('', donaciones, name="donaciones" ),
    path('', indentificaciones, name="indentificaciones" ),
    path('', Seguimiento, name="Seguimiento" ),
    path('', inicio, name="inicio" ),
    path('', nosotros, name="nosotros" ),
    path('', tienda, name="tienda" ),
    path('', nav, name="nav" ),
    path('', footer, name="footer" ),
]






