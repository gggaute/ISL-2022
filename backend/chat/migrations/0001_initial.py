# Generated by Django 3.2.12 on 2022-04-25 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sendericon', models.CharField(blank=True, max_length=100)),
                ('receivericon', models.CharField(blank=True, max_length=100)),
                ('chatquestion1', models.CharField(max_length=1000)),
                ('answer11', models.CharField(max_length=1000)),
                ('answer12', models.CharField(max_length=1000)),
                ('correctanswer1', models.CharField(max_length=1000)),
                ('explanation1', models.CharField(max_length=1000)),
                ('chatquestion2', models.CharField(blank=True, max_length=1000)),
                ('answer21', models.CharField(blank=True, max_length=1000)),
                ('answer22', models.CharField(blank=True, max_length=1000)),
                ('correctanswer2', models.CharField(blank=True, max_length=1000)),
                ('explanation2', models.CharField(blank=True, max_length=1000)),
                ('chatquestion3', models.CharField(blank=True, max_length=1000)),
                ('answer31', models.CharField(blank=True, max_length=1000)),
                ('answer32', models.CharField(blank=True, max_length=1000)),
                ('correctanswer3', models.CharField(blank=True, max_length=1000)),
                ('explanation3', models.CharField(blank=True, max_length=1000)),
                ('chatquestion4', models.CharField(blank=True, max_length=1000)),
                ('answer41', models.CharField(blank=True, max_length=1000)),
                ('answer42', models.CharField(blank=True, max_length=1000)),
                ('correctanswer4', models.CharField(blank=True, max_length=1000)),
                ('explanation4', models.CharField(blank=True, max_length=1000)),
                ('chatquestion5', models.CharField(blank=True, max_length=1000)),
                ('answer51', models.CharField(blank=True, max_length=1000)),
                ('answer52', models.CharField(blank=True, max_length=1000)),
                ('correctanswer5', models.CharField(blank=True, max_length=1000)),
                ('explanation5', models.CharField(blank=True, max_length=1000)),
            ],
        ),
    ]
