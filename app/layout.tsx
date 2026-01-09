
import FeatureFlagGlobalState from "./components/feature-flag/context";
import featureFlagServiceCall from "./components/feature-flag/data";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flags=featureFlagServiceCall();
  return (
    <html>
    <body>
    <FeatureFlagGlobalState>
    <div>
     {children}
    </div>
    </FeatureFlagGlobalState>
    </body>
    </html>

  );
}
