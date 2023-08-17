import cron from 'cron';

const cronJob = new cron.CronJob('* * * * * *', () => {
  console.log('Running a cron job every second');
});

cronJob.start();