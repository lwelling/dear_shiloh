import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "./components/Navbar/NavBar";
import { ProvideAuth } from "./auth/providers/ProvideAuth";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <ProvideAuth>
          <Navbar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ProvideAuth>
      </body>
    </html>
  );
}
