import csv
from wsgiref import headers

with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader


bathing_by_campaign = {}
for row in data:
    campaign = row[6]
    bathing = row[2]
    if campaign not in bathing_by_campaign:
        bathing_by_campaign[campaign] = {
          "Própria": 0,
          "Imprópria": 0,
          "Muito Boa": 0,
          "Indisponível": 0,
          "Satisfatória": 0,
        }
    bathing_by_campaign[campaign][bathing] += 1

with open("report_by_campaign.csv", "w") as file:
    writer = csv.writer(file)

    headers = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]
    writer.writerow(headers)

    for campaign, bathing in bathing_by_campaign.items():
        row = [campaign]
        for value in bathing.values():
            row.append(value)
        row = [campaign, *bathing.values()]
        writer.writerow(row)
