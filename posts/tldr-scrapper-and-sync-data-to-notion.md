---
title: "NodeJs Scrapper and Data Sync to Notion"
date: " Apr 17 2022"
desc: "a nodejs and cheerio news scraper that scrapes the most recent tldrtech page and returns Programming and Github information, then uploads that data into the notion database"
type: "Project"
cover_img: "/Blog/nd.jpg"
auther: "Rohan Salunkhe"
---

# TLDR Scrapper and Sync Data to Notion

A Nodejs and cheerio news scraper that scrapes the most recent tldrtech page and returns Programming and Github information, then uploads that data into the notion database

## How does it works?

> It scrapes data from [tldr.tech](http://tldr.tech) site and uploads to notion

## Prequisites

To get started, you'll need a notion account, a notion page, and a craete database.

## Getting NOTION_API_KEY and DATABASE_ID

1. [Go to Notion Dashbaord](https://www.notion.so/amrohan)

2. Click on New page

![Step 2 screenshot](https://images.tango.us/public/screenshot_aeee0dca-570a-4759-998d-e85ab4445c8d?crop=focalpoint&fit=crop&fp-x=0.0880&fp-y=0.9686&fp-z=2.3881&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

3. Click on table

![Step 3 screenshot](https://images.tango.us/public/screenshot_895cfa3a-fca0-4f4e-8840-1c5ce6be4860?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

4. Click on New database

![Step 4 screenshot](https://images.tango.us/public/screenshot_6c1f2e99-14bd-4ee5-ae54-2a83675f1b9b?crop=focalpoint&fit=crop&fp-x=0.8422&fp-y=0.6911&fp-z=3.1189&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

5. Create new databse

![Step 5 screenshot](https://images.tango.us/public/screenshot_b77dd653-0faf-4138-92cc-954f5725b3fa?crop=focalpoint&fit=crop&fp-x=0.3246&fp-y=0.2154&fp-z=2.3245&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

6. Check the url and make a note of Databse ID

Take note of this after /  and before ? mark this is your<u> **DATABASE_ID**</U>
![Step 6 screenshot](https://images.tango.us/public/edited_image_d13fdcab-df5a-47ce-9c26-39f716ad75dc?crop=focalpoint&fit=crop&fp-x=0.2804&fp-y=0.1736&fp-z=2.8696&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A968)

7. Click on New integration

![Step 7 screenshot](https://images.tango.us/public/screenshot_c86fb637-5b36-4c7a-bae0-f965f7045b4e?crop=focalpoint&fit=crop&fp-x=0.2581&fp-y=0.5577&fp-z=2.3970&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

8. Type your integration name

![Step 8 screenshot](https://images.tango.us/public/screenshot_557e6811-d8f6-438e-ae48-d8aa7443ff96?crop=focalpoint&fit=crop&fp-x=0.5143&fp-y=0.4109&fp-z=1.7439&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

9. Click on Submit

![Step 9 screenshot](https://images.tango.us/public/screenshot_63a39e4d-f83c-4f69-838b-4e611b27b4dd?crop=focalpoint&fit=crop&fp-x=0.6245&fp-y=0.8873&fp-z=2.7273&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

12. Click on show

Take a note of this screate key it is your notion key
![Step 11 screenshot](https://images.tango.us/public/screenshot_9823bb86-cd5e-4ae7-b96d-e03912cacd57?crop=focalpoint&fit=crop&fp-x=0.4995&fp-y=0.7337&fp-z=1.8391&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

13. Click on Share

![Step 12 screenshot](https://images.tango.us/public/screenshot_aff34ff3-7170-4483-8fe5-80a684b84f2d?crop=focalpoint&fit=crop&fp-x=0.9091&fp-y=0.0320&fp-z=2.9478&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

14. Click on invite box

![Step 13 screenshot](https://images.tango.us/public/screenshot_68e059db-1d1c-4534-8253-989f204a8ff6?crop=focalpoint&fit=crop&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

15. Click on your integration name and click on Invite

![Step 14 screenshot](https://images.tango.us/public/edited_image_13cd9d57-c45f-4f5e-aa3e-3db0bd8951fa?crop=focalpoint&fit=crop&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A892)

16.Create `.env` file into the root directory

```bash
NOTION_API_KEY='<your_notion_api_key>'

DATABASE_ID='<your_database_id>'
```

### Installation

1. Clone the Repo

   ```bash
   https://github.com/amrohan/tldr-tech-scraper
   ```

2. Install packages

   ```bash
   yarn install
   ```

3. Run the script

   ```bash
   yarn dev
   ```

4. Make your desired modifications and rerun the script.

### Hosting

Use your preferred hosting service to deploy this scrapper.

1. [render](https://render.com)
2. [Heroku](https://www.heroku.com/)
3. [Digital Ocean](https://www.digitalocean.com/)
4. [AWS](https://aws.amazon.com/)
5. [GCP](https://cloud.google.com/)

> Just add environment variables to your favorite hosting service.
