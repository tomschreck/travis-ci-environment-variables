// Set a local variable populated by the environment variable $NAME
const FAVORITE_INSTRUCTOR = process.env.INSTRUCTOR_NAME;


function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main()
{
  while (true)
  {
    console.log(`Microservices rock! - ${FAVORITE_INSTRUCTOR}`);
    await sleep(5000);
  }
}

main();
