const sentence = "hello there from lighthouse labs";
let interval = 0;
for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
    }, interval)
  interval += 500;
}
setTimeout(() => {
  console.log(' ');
}, interval)
