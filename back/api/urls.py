from django.urls import path, include
from . import views


urlpatterns = [
    path('services_list', views.ServicesList.as_view(), name='services_list'),
    path('consultation_message', views.SendConsultationMessage.as_view(), name='consultation_message'),
    path('call_message', views.CreateCallApplication.as_view(), name='call_message'),
]
