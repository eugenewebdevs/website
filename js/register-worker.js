if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(registration =>
      console.log("Service worker registered.", { registration })
    )
    .catch(error =>
      console.log("Service worker could not register.", { error })
    );
} else {
  console.error("Service workers are not supported.");
}
