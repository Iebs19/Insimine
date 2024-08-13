from django.contrib import admin
from .models import Blog, Service, TechStack, Client, ContentBlock, CaseStudy, WhitePaper, Testimonial
from django.contrib.contenttypes.admin import GenericTabularInline
from django.forms import BaseInlineFormSet, forms

class ContentBlockInline(admin.StackedInline):
    model = ContentBlock
    extra = 1
    fields = ['block_type', 'text', 'image', 'text_type']

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if obj:
            if obj.block_type == ContentBlock.TEXT:
                form.base_fields['text_type'].widget = forms.Select(choices=ContentBlock.TEXT_TYPE_CHOICES)
                form.base_fields['image'].widget = forms.HiddenInput()
            elif obj.block_type == ContentBlock.IMAGE:
                form.base_fields['image'].widget = forms.ClearableFileInput()
                form.base_fields['text'].widget = forms.HiddenInput()
                form.base_fields['text_type'].widget = forms.HiddenInput()
        return form

class BaseContentAdmin(admin.ModelAdmin):
    inlines = [ContentBlockInline]
    list_display = ('title', 'created_at', 'updated_at')

@admin.register(Blog)
class BlogAdmin(BaseContentAdmin):
    pass

@admin.register(CaseStudy)
class CaseStudyAdmin(BaseContentAdmin):
    pass

@admin.register(Service)
class ServiceAdmin(BaseContentAdmin):
    pass

@admin.register(TechStack)
class TechStackAdmin(admin.ModelAdmin):
    list_display = ('name', 'desc')
    search_fields = ('name',)

@admin.register(WhitePaper)
class WhitePaperAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    search_fields = ('name',)

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')
    search_fields = ('name',)

@admin.register(Testimonial)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('author','company', 'content')
    search_fields = ('author','company')
