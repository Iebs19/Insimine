from rest_framework import serializers
from .models import Blog, Service, TechStack, Client, ContentBlock, FormData, CaseStudy, WhitePaper, Testimonial

class ContentBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentBlock
        fields = ['id', 'block_type', 'text', 'image', 'order', 'text_type']

class BlogSerializer(serializers.ModelSerializer):
    content_blocks = ContentBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'created_at', 'updated_at', 'content_blocks']

    def get_content_blocks(self, obj):
        content_blocks = ContentBlock.objects.filter(
            content_type__model='blog',
            content_id=obj.id
        ).order_by('order')
        return ContentBlockSerializer(content_blocks, many=True).data

class CaseStudySerializer(serializers.ModelSerializer):
    content_blocks = ContentBlockSerializer(many=True, read_only=True)

    class Meta:
        model = CaseStudy
        fields = ['id', 'title', 'created_at', 'updated_at', 'content_blocks']

    def get_content_blocks(self, obj):
        content_blocks = ContentBlock.objects.filter(
            content_type__model='case-study',
            content_id=obj.id
        ).order_by('order')
        return ContentBlockSerializer(content_blocks, many=True).data


class ServiceSerializer(serializers.ModelSerializer):
    content_blocks = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = ['id', 'title', 'created_at', 'updated_at', 'content_blocks']

    def get_content_blocks(self, obj):
        content_blocks = ContentBlock.objects.filter(
            content_type__model='service',
            content_id=obj.id
        ).order_by('order')
        return ContentBlockSerializer(content_blocks, many=True).data

class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = ['id', 'firstName', 'lastName', 'email', 'phone', 'company', 'designation', 'country', 'submitted_at']

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

