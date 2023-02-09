from django.db import models

class Service(models.Model):

    class Meta:
        verbose_name = ('Сервис')
        verbose_name_plural = ('Сервисы')

    title  = models.CharField(verbose_name='Название услуги', max_length=255)
    shortcut = models.CharField(verbose_name='Краткое назввание', max_length=255)
    content = models.TextField(("Содержание услуги"))
    icon = models.CharField(("Иконка"), max_length=50)
     


class News(models.Model):

    
    title = models.CharField(("Заголовок"), max_length=255)
    date = models.DateField(("Дата новости"), auto_now=False, auto_now_add=False)
    description = models.TextField(("Текст новости"))
    img = models.ImageField(("Изображение"), upload_to='news', height_field=None, width_field=None, max_length=None)


    class Meta:
        verbose_name = ("Новость")
        verbose_name_plural = ("Новости")

    # def __str__(self):
    #     return self.name



class Review(models.Model):

    

    class Meta:
        verbose_name = ("Отзыв")
        verbose_name_plural = ("Отзывы")

    # def __str__(self):
    #     return self.name

    rating = models.IntegerField(("Рейтинг от 1 до 5"))
    author = models.CharField(("Автор отзыва"), max_length=255)
    date = models.DateField(("Дата отзыва"), auto_now=False, auto_now_add=False)
    company =  models.CharField(("Компания оставившая отзыв"), max_length=255)
    text = models.TextField(("Текст отзыва"))
