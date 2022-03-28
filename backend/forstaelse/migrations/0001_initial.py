# Generated by Django 3.2.12 on 2022-03-22 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Forstaelse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer1', models.CharField(choices=[('true', 'true'), ('false', 'false')], max_length=5)),
                ('chat1', models.CharField(max_length=1000)),
                ('question1', models.CharField(max_length=1000)),
                ('explanation1', models.CharField(max_length=1000)),
                ('chat2', models.CharField(blank=True, max_length=1000)),
                ('question2', models.CharField(blank=True, max_length=1000)),
                ('answer2', models.CharField(blank=True, choices=[('true', 'true'), ('false', 'false')], max_length=5)),
                ('explanation2', models.CharField(blank=True, max_length=1000)),
                ('chat3', models.CharField(blank=True, max_length=1000)),
                ('question3', models.CharField(blank=True, max_length=1000)),
                ('answer3', models.CharField(blank=True, choices=[('true', 'true'), ('false', 'false')], max_length=5)),
                ('explanation3', models.CharField(blank=True, max_length=1000)),
                ('chat4', models.CharField(blank=True, max_length=1000)),
                ('question4', models.CharField(blank=True, max_length=1000)),
                ('answer4', models.CharField(blank=True, choices=[('true', 'true'), ('false', 'false')], max_length=5)),
                ('explanation4', models.CharField(blank=True, max_length=1000)),
            ],
        ),
    ]
