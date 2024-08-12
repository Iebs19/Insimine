from django.db import models
from django.utils import timezone
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

def content_block_image_upload_to(instance, filename):
    if instance.blog:
        return os.path.join('blog_images/', filename)
    elif instance.case_study:
        return os.path.join('case_study_images/', filename)
    elif instance.service:
        return os.path.join('service_images/', filename)
    return os.path.join('other_images/', filename)

class Blog(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class CaseStudy(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ContentBlock(models.Model):
    TEXT = 'text'
    IMAGE = 'image'

    BLOCK_TYPE_CHOICES = [
        (TEXT, 'Text'),
        (IMAGE, 'Image'),
    ]

    TEXT_TYPE_CHOICES = [
        ('heading', 'Heading'),
        ('subheading', 'Subheading'),
        ('list', 'List'),
        ('normal', 'Normal Text'),
    ]

    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,default='blog')
    content_id = models.PositiveIntegerField(default=0)
    content_object = GenericForeignKey('content_type', 'content_id')

    block_type = models.CharField(max_length=10, choices=BLOCK_TYPE_CHOICES)
    text = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='content_block_images/', null=True, blank=True)
    order = models.PositiveIntegerField()
    text_type = models.CharField(max_length=20, choices=TEXT_TYPE_CHOICES, null=True, blank=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f'{self.content_type} - {self.get_block_type_display()} - {self.order}'




class FormData(models.Model):
    firstName = models.CharField(max_length=100,default='Default First Name')
    lastName = models.CharField(max_length=100,default='Default Last Name')
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=100,default='Default Company')
    designation = models.CharField(max_length=100,default='Default Designation')
    country = models.CharField(max_length=30,default='USA')
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class TechStack(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()
    image = models.ImageField(upload_to='tech_images/', null=True, blank=True)

    def __str__(self):
        return self.name

class WhitePaper(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='whitepaper_images/', null=True, blank=True)
    description = models.TextField()
    pdf = models.FileField(upload_to='whitepapers/', null=True, blank=True)

    def __str__(self):
        return self.title

class Client(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='client_images/', null=True, blank=True)

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    author = models.CharField(max_length=50)
    company = models.CharField(max_length=50,default='Default Company')
    content = models.TextField()

    def __str__(self):
        return self.author
