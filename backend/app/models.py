from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from ckeditor.fields import RichTextField

# class ContentBlock(models.Model):
#     TEXT = 'text'
#     IMAGE = 'image'
#     BLOCK_TYPE_CHOICES = [
#         (TEXT, 'Text'),
#         (IMAGE, 'Image'),
#     ]

#     TEXT_TYPE_CHOICES = [
#         ('heading', 'Heading'),
#         ('subheading', 'Subheading'),
#         ('list', 'List'),
#         ('point', 'Point'),
#         ('normal', 'Normal Text'),
#     ]

#     blog = models.ForeignKey('Blog', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
#     case_study = models.ForeignKey('CaseStudy', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
#     service = models.ForeignKey('Service', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
#     event = models.ForeignKey('Event', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
#     techstack = models.ForeignKey('TechStack', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')

#     block_type = models.CharField(max_length=10, choices=BLOCK_TYPE_CHOICES)
#     text = models.TextField(blank=True)
#     image = models.ImageField(upload_to='content_blocks/', blank=True)
#     text_type = models.CharField(max_length=20, choices=TEXT_TYPE_CHOICES, blank=True)

#     class Meta:
#         ordering = ['id']  # or another default ordering

#     def __str__(self):
#         return f"ContentBlock for {self.blog or self.case_study or self.service}"

class ContentBlock(models.Model):
    TEXT = 'text'
    IMAGE = 'image'
    BLOCK_TYPE_CHOICES = [
        (TEXT, 'Text'),
        (IMAGE, 'Image'),
    ]

    IMAGE_SIZE_CHOICES = [
        ('thumbnail', 'Thumbnail'),
        ('medium', 'Medium'),
        ('large', 'Large'),
    ]

    blog = models.ForeignKey('Blog', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
    techstack = models.ForeignKey('TechStack', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
    case_study = models.ForeignKey('CaseStudy', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
    service = models.ForeignKey('Service', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
    event = models.ForeignKey('Event', on_delete=models.CASCADE, null=True, blank=True, related_name='content_blocks')
    

    block_type = models.CharField(max_length=10, choices=BLOCK_TYPE_CHOICES)
    text = RichTextField(blank=True) 
    image = models.ImageField(upload_to='content_blocks/', blank=True)
    image_size = models.CharField(max_length=10, choices=IMAGE_SIZE_CHOICES, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"ContentBlock for {self.blog or self.case_study or self.service}"

class Blog(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    mainImage = models.ImageField(upload_to='blog_images/', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class CaseStudy(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    mainImage = models.ImageField(upload_to='case_study_images/', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    mainImage = models.ImageField(upload_to='service_images/', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    mainImage = models.ImageField(upload_to='event_images/', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class TechStack(models.Model):
    title = models.CharField(max_length=200, default='Default Title')
    mainImage = models.ImageField(upload_to='techstack_images/', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class FormData(models.Model):
    firstName = models.CharField(max_length=100, default='Default First Name')
    lastName = models.CharField(max_length=100, default='Default Last Name')
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True) 
    company = models.CharField(max_length=100, default='Default Company')
    designation = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=30, default='USA')
    type = models.CharField(max_length=50, default='')  
    title = models.CharField(max_length=100, default='')    
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"

class WhitePaper(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='whitepaper_images/', null=True, blank=True)
    description = models.TextField()
    pdf = models.FileField(upload_to='whitepapers/', null=True, blank=True)

    def __str__(self):
        return self.title

def validate_svg_or_image(file):
    if not (file.name.endswith('.svg') or file.name.endswith('.jpg') or file.name.endswith('.png')):
        raise ValidationError('File is not an image or SVG.')

class Client(models.Model):
    name = models.CharField(max_length=100)
    image = models.FileField(upload_to='client_images/', validators=[validate_svg_or_image], null=True, blank=True)

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    author = models.CharField(max_length=50)
    company = models.CharField(max_length=50,default='Default Company')
    content = models.TextField()

    def __str__(self):
        return self.author
