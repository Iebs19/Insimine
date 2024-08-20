from rest_framework import serializers
from .models import Blog, Service, TechStack, Client, ContentBlock, FormData, CaseStudy, WhitePaper, Testimonial

class ContentBlockSerializer(serializers.ModelSerializer):
    text_type = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = ContentBlock
        fields = ['block_type', 'text', 'text_type', 'image']

    def get_text_type(self, obj):
        return obj.text_type if obj.block_type == ContentBlock.TEXT else None

    def get_image(self, obj):
        return obj.image.url if obj.block_type == ContentBlock.IMAGE else None


class BlogSerializer(serializers.ModelSerializer):
    content_blocks = ContentBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'mainImage' ,'created_at', 'updated_at', 'content_blocks']

class CaseStudySerializer(serializers.ModelSerializer):
    content_blocks = ContentBlockSerializer(many=True, read_only=True)

    class Meta:
        model = CaseStudy
        fields = ['id', 'title', 'mainImage' ,'created_at', 'updated_at', 'content_blocks']

class ServiceSerializer(serializers.ModelSerializer):
    content_blocks = ContentBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = ['id', 'title', 'mainImage','created_at', 'updated_at', 'content_blocks']


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = ['id', 'firstName', 'lastName', 'email', 'phone', 'company', 'designation', 'country', 'submitted_at','type','title']

class TechStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechStack
        fields = '__all__'

class WhitePaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhitePaper
        fields = ['id', 'title', 'image', 'description', 'pdf']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'author', 'company', 'content']

