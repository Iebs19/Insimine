# Generated by Django 5.0.7 on 2024-08-06 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_techstack_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='WhitePaper',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('image', models.ImageField(blank=True, null=True, upload_to='whitepaper_images/')),
                ('description', models.TextField()),
                ('pdf', models.FileField(blank=True, null=True, upload_to='whitepapers/')),
            ],
        ),
        migrations.AddField(
            model_name='formdata',
            name='country',
            field=models.CharField(default='USA', max_length=30),
        ),
    ]
