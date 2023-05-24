const {readFile, writeFile} = require('fs').promises;


const begin = async () => {
  try {
    const first = await readFile('./contents/firstfile.txt', 'utf8');
    const second = await readFile('./contents/secondfile.txt', 'utf-8');

    await writeFile
    ('./contents/newpromiseFile.txt',
      `This is the new writings async ${first} and ${second}`,
      {flag: 'a'}
    )
    console.log(first,second)
  }
  catch (error) {
    console.log(error)    
  }
}

begin()

