# Generated by Django 3.2.12 on 2022-03-20 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rydde_setninger', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ryddesetninger',
            name='word11',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='word12',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='word13',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='word14',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='word15',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='wordClass11',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='wordClass12',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='wordClass13',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='wordClass14',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AddField(
            model_name='ryddesetninger',
            name='wordClass15',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word1',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word10',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word2',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word3',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word4',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word5',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word6',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word7',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word8',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='word9',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass1',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass10',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass2',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass3',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass4',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass5',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass6',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass7',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass8',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
        migrations.AlterField(
            model_name='ryddesetninger',
            name='wordClass9',
            field=models.CharField(blank=True, choices=[('sub', 'Subjekt'), ('ob', 'Objekt/Predikativ'), ('adv', 'Adverbial'), ('set', 'Setningsadverbial'), ('conj', 'Konjuksjon'), ('subj', 'Subjuksjon'), ('fin', 'Finitt verb'), ('infin', 'Infinitt verb')], max_length=12),
        ),
    ]
