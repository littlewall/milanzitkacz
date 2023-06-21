const HeadSEO: React.FC<{children?: React.ReactNode}> = ({children}) => (
    <>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest"/>
        <link rel="icon" href="/images/favicon/favicon.svg"/>
        <meta name="theme-color" content="#ffffff"></meta>
        {children}
    </>
);

export default HeadSEO;
