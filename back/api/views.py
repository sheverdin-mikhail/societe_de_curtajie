from django.shortcuts import render
from rest_framework import generics, views
from rest_framework.response import Response
from rest_framework import permissions
from django.core.mail import send_mail

from .serializers import ServicesSerializer, CallSerializer, ConsultationMailSerializer
from .models import Service, Application



class ServicesList(generics.ListAPIView):

    serializer_class = ServicesSerializer
    queryset = Service.objects.all().order_by('id')



class SendConsultationMessage(generics.CreateAPIView):

    serializer_class = ConsultationMailSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        query = Application.objects.all()
        return query
    

    def create(self, request, *args, **kwargs):


        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        send_mail(
            'Уведомление',
            'Ваша заявка на консультацию принята, ожидайте с вами свяжется наш специалист!',
            'info@scr-broker.ru',
            [serializer.data['email']],
            fail_silently=False
        )

        send_mail(
            'Уведомление',
            f"Пришла заявка на консультацию. Имя: {serializer.data['name']}, Почта: {serializer.data['email']}, Телефон: {serializer.data['phone']}, Компания: {serializer.data['company']}",
            'info@scr-broker.ru',
            ['scr@scr-broker.com'],
            fail_silently=False
        )

        return super().create(request)



class CreateCallApplication(generics.CreateAPIView):

    serializer_class = CallSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        send_mail(
            'Уведомление',
            f"Пришла заявка на звонок. Имя: {serializer.data['name']}, Телефон: {serializer.data['phone']}, Компания: {serializer.data['company']}",
            'info@scr-broker.ru',
            ['scr@scr-broker.com'],
            fail_silently=False
        )

        return super().create(request)        