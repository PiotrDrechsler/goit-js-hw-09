import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

const form = document.querySelector('.form');

form.addEventListener('submit', startCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {  
        resolve({position, delay});
      } else {  
        reject({position, delay});
      }
    }, delay);
  });
}

function startCreatePromise(event) {
  event.preventDefault();
  let setDelay = Number(inputDelay.value);
  let setStep = Number(inputStep.value);
  let amount = Number(inputAmount.value);

  for (let i = 1; i <= amount; i++) {
  createPromise(i, setDelay, )
  .then(({position, delay}) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
     })
  .catch(({position, delay}) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    setDelay += setStep;
  }
}
