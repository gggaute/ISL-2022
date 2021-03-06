# Generated by Django 3.2.12 on 2022-04-25 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SortSentence',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word1', models.CharField(max_length=40)),
                ('wordClass1', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word2', models.CharField(max_length=40)),
                ('wordClass2', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word3', models.CharField(max_length=40)),
                ('wordClass3', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word4', models.CharField(blank=True, max_length=40)),
                ('wordClass4', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word5', models.CharField(blank=True, max_length=40)),
                ('wordClass5', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word6', models.CharField(blank=True, max_length=40)),
                ('wordClass6', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word7', models.CharField(blank=True, max_length=40)),
                ('wordClass7', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word8', models.CharField(blank=True, max_length=40)),
                ('wordClass8', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word9', models.CharField(blank=True, max_length=40)),
                ('wordClass9', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word10', models.CharField(blank=True, max_length=40)),
                ('wordClass10', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word11', models.CharField(blank=True, max_length=40)),
                ('wordClass11', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word12', models.CharField(blank=True, max_length=40)),
                ('wordClass12', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word13', models.CharField(blank=True, max_length=40)),
                ('wordClass13', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word14', models.CharField(blank=True, max_length=40)),
                ('wordClass14', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
                ('word15', models.CharField(blank=True, max_length=40)),
                ('wordClass15', models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12)),
            ],
        ),
    ]
