from django.contrib import admin
from django import forms
from ckeditor.widgets import CKEditorWidget
from .models import Service, News, Review


class SerivceAdminForm(forms.ModelForm):
    content  = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model: Service
        fields = '__all__'


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'shortcut')
    form = SerivceAdminForm


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'title')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'rating', 'author', 'date')

