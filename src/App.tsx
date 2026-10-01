import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setIsSubmitted(true);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
    setEmail("");
    setIsError(false);
  };

  if (isSubmitted) {
    return (
      <main className="success-page">
        <section className="success-card">
          <img
            src="assets/images/icon-success.svg"
            alt=""
            className="success-icon"
          />

          <h1>Thanks for subscribing!</h1>

          <p>
            A confirmation email has been sent to{" "}
            <strong>{email}</strong>. Please open it and click the button
            inside to confirm your subscription.
          </p>

          <button onClick={handleDismiss}>
            Dismiss message
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="newsletter">
      <section className="newsletter-content">
        <h1>Stay updated!</h1>

        <p>
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul>
          <li>
            <img src="assets/images/icon-list.svg" alt="" />
            <span>Product discovery and building what matters</span>
          </li>

          <li>
            <img src="assets/images/icon-list.svg" alt="" />
            <span>Measuring to ensure updates are a success</span>
          </li>

          <li>
            <img src="assets/images/icon-list.svg" alt="" />
            <span>And much more!</span>
          </li>
        </ul>

        <form onSubmit={handleSubmit} noValidate>
          <div className="label-row">
            <label htmlFor="email">Email address</label>

            {isError && <span>Valid email required</span>}
          </div>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setIsError(false);
            }}
            className={isError ? "input-error" : ""}
            placeholder="email@company.com"
          />

          <button type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>

      <picture className="newsletter-image">
        <source
          media="(max-width: 767px)"
          srcSet=""
        />

        <img
          src="assets/images/illustration-sign-up-desktop.svg"
          alt=""
        />
      </picture>
    </main>
  );
}

export default App;