import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import Link from 'next/link';
import css from '@/components/Publication/publications.module.css';

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: 'Creating Mobile Websites' })}</title>
            </Head>

            <article id="creating-mobile-websites">
                <h1>Creating Mobile Websites</h1>
                <p>
                    <em>
                        This article was published in the{' '}
                        {/* <a href="http://enough.de/app-coaching/mobile-developers-guide/"> */}
                        <a href="https://de.slideshare.net/enoughmarco/mobile-developers-guide-to-the-galaxy-no-9">
                            Mobile Developer’s Guide To The Galaxy #9
                        </a>{' '}
                        in October 2011.
                    </em>
                </p>
                <div className={css.coverImage}>
                    <Image
                        src={require('../../assets/img/publications/devguide9.jpg')}
                        alt="Cover: Mobile Dev Guide #9"
                    />
                </div>
                <p>
                    Why create a mobile website instead of an application? Using the web has a number of advantages,
                    websites can be browsed on most devices, the technology is flexible, and it is easy to update sites
                    so all users get the latest version. You only need to modify a single codebase if you want to add or
                    change content or even features, rather than updating each application.
                </p>
                <h2>Context Is King</h2>
                <p>
                    When you create a website for desktop browsers you typically design and develop for a context in
                    which a user has a large display, enough time, power and also a fast persistent internet connection.
                    None of these are guaranteed when using the internet on mobile devices.
                </p>
                <p>
                    Although most new devices have much larger screens than devices a few years before, they are mostly
                    still small compared to desktop devices. Beyond that users often access a mobile website when they
                    are on the go and they may be focusing on other things in addition to the web site they are using
                    because they have to look at the traffic for example.
                </p>
                <p>
                    Other problems to consider are the effects of a weak signal and a slow mobile internet connection.
                    Since the average internet user is impatient, you can easily lose a user who has to wait too long
                    for pages to load – they may obtain the information elsewhere. Therefore you should try to keep
                    content such as external scripts and images as small as practical.
                </p>
                <p>
                    You should consider these factors when you are about to design a website for mobile devices. Focus
                    your mobile web strategy on what content a user is probably looking for when they visit your
                    website. They are unlikely to be interested in your awesome company intro page animation made in
                    Flash. Beyond you should also think about the contexts in which your mobile site will be used before
                    you begin to design a mobile website.
                </p>
                <p>
                    It could be in a train with a weak signal, in a village with poor connection speed, outside in a
                    sunny environment on a top-notch smartphone with touchscreen display as well as on an older feature
                    phone with an even older browser and keypad operation. You cannot influence the context a user is in
                    but you can design your site to be useable under all these circumstances.
                </p>
                <h2>Usability Aspects</h2>
                <p>
                    After thinking about content and context it is equally important to consider usability. It is not
                    only a matter of what content is interesting for a user and the contexts in it will be consumed but
                    also a matter of how your target audience will use your site. Navigating your site is less fun when
                    doing it using the device’s keyboard instead of just using your finger on a large screen but it can
                    be easier if the links within your page are so damn small that it is almost impossible to hit them
                    without causing unwanted behavior (like tapping other links as you actually wanted to). There are
                    some basic hints to make sure your content is adapted in the best possible and usable way for mobile
                    users:
                </p>
                <ol>
                    <li>
                        <strong>Make it “mobile” not only “small”:</strong> Create a concept that utilizes the
                        possibilities of the technology. You won’t satisfy many people by simply offering a smaller
                        version of your classic website. Mobilize, don’t miniaturize!
                    </li>
                    <li>
                        <strong>Keep all paths open:</strong> Leave it up to the user to access either the mobile or
                        desktop version of your website.
                    </li>
                    <li>
                        <strong>Keep it simple:</strong> Avoid complex navigation structures, users will not dig that
                        deep anyway while they are on the go.
                    </li>
                    <li>
                        <strong>Avoid text input wherever possible:</strong> Text input on mobiles sucks. If you really
                        need the users to enter text, use wide input boxes so that they see what they are typing.
                        Buttons to clear an input field on click/touch are also helpful very often.
                    </li>
                    <li>
                        <strong>Adapt the media:</strong> Adapt all pictures, videos and alike to be displayed properly
                        on the handset (check the corresponding chapter in this guide: “Implementing Rich Media” for
                        more information). Try to avoid formats such as .doc and pdf if possible.
                    </li>
                    <li>
                        <strong>The user is a creature of habit:</strong> respect that: Adapt usage patterns from
                        classic websites such as linking logos to the homepage or offering corrections to mistyped
                        search requests.
                    </li>
                    <li>
                        <strong>Think of stubby fingers:</strong> When optimizing your content for touch screen phones
                        do not use clickable areas smaller than ~50x50px.
                    </li>
                    <li>
                        <strong>Use sharp contrasts:</strong> Fonts and background colors that guarantee legibility in
                        any surrounding, including bright sunlight.
                    </li>
                    <li>
                        <strong>Reflect continuously:</strong> Ask yourself if you would use the implemented features
                        yourself. Ask your friends and colleagues as well before realizing your ideas.
                    </li>
                    <li>
                        <strong>Do not require the user to think.</strong> Try to implement intuitive navigation, do not
                        force users to make decisions more often than necessary.
                    </li>
                </ol>
                <h2>Technical Limits of Web Technologies</h2>
                <p>
                    When it comes to the decision whether to create an app or a mobile website for a specific project
                    many mobile developers tend to say “app” first because you seem to have more possibilities and
                    better performance. This answer is seldom wrong but it is only half the truth. Let’s have a detailed
                    view on the advantages and disadvantages of mobile websites or web apps compared with native mobile
                    apps.
                </p>
                <p>
                    If you are coming from the “desktop world” and you have never created a website for mobile devices
                    before (or if the last time you did is already a long time ago) you will be surprised about the
                    capabilities of modern mobile phone’s web browsers. Assuming that you intend to optimize your mobile
                    website mainly for modern platforms you would also create apps for (iOS, Android, BlackBerry OS,
                    WebOS, bada, Windows Phone) we will primarily focus on modern browsers running on the mentioned
                    platforms in this chapter.
                </p>
                <p>
                    The current generation browsers on major platforms support a variety of modern HTML5, CSS and
                    JavaScript features like Geolocation, WebGL (interesting for mobile game development), hardware
                    acceleration, offline storage and many more. You can easily find out if a user is online or offline,
                    you can synchronize online data on a device for later offline use (e.g. if the signal is lost) and
                    you can make whole web applications available even when a user has no active internet connection.
                </p>
                <p>
                    You can ask for permission to query the current position of a user just like you can do in a native
                    app and you can also access the gyroscope of an iPhone using pure JavaScript directly in the
                    browser. In addition mobile browser vendors are also working on making it possible to access the
                    phone’s camera, network status or address book data.
                </p>
                <p>
                    Sounds pretty app like, doesn’t it? JavaScript is still often underestimated but if you know how you
                    can rapidly create high class web apps which make extensive use of a device’s capabilities (almost)
                    without the need to create proprietary versions for each platform.
                </p>
                <p>
                    And that’s not all: almost all recent mobile browsers support a lot of the current CSS3 standard and
                    so you can create nice and shiny things like transitions, custom web fonts, drop shadows or rounded
                    corners with only little effort which makes it very easy to let your web applications look and feel
                    like native apps.
                </p>
                <p>
                    Pitfalls? Issues? Of course there are some. Although modern browsers already have a wide range of
                    device API support there are still things you cannot yet do inside a browser. Accessing the camera
                    as already mentioned is one thing. You cannot prevent the device from going to standby mode on a
                    website which can sometimes be a problem. And sure: you will need to implement your own user
                    interface in HTML, CSS and JavaScript instead of just using the native GUI functionality which is a
                    bit faster in most cases. But if your code is clean and effects are used wisely the performance
                    difference to native apps is so small that a user probably will not even realise he is just using a
                    web app instead of a native app.
                </p>
                <table>
                    <tbody>
                        <tr>
                            <th>Feature</th>
                            <th>Mobile Website</th>
                            <th>Native App</th>
                        </tr>
                        <tr>
                            <td>Detect online status</td>
                            <td className="good">Yes</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Offline data storage</td>
                            <td className="good">Yes (very limited)</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Access GPS sensor/geolocation</td>
                            <td className="good">Yes</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Access gyroscope</td>
                            <td className="good">Yes</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Access camera</td>
                            <td className="notsogood">Not yet (planned)</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Access address book</td>
                            <td className="notsogood">Not yet (planned)</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Notifications (i.e. vibration, push, messages)</td>
                            <td className="notsogood">Not yet (planned)</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Cross-platform compatible</td>
                            <td className="good">Yes</td>
                            <td className="bad">No</td>
                        </tr>
                        <tr>
                            <td>Check battery status</td>
                            <td className="notsogood">Not yet (planned)</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Different touch keyboard layouts on input fields</td>
                            <td className="notsogood">Yes (incomplete)</td>
                            <td className="good">Yes</td>
                        </tr>
                        <tr>
                            <td>Appstore approval needed?</td>
                            <td className="good">No</td>
                            <td className="bad">Yes</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Fragmentation</h2>
                <p>
                    <em>“In mobile, fragmentation is forever”.</em> Unfortunately it is not always as easy to create a
                    cross-device cross-platform crossbrowser cross-markup “cross-blahblah” mobile website as you might
                    think. Dealing with many different devices also results in an annoying fragmentation jungle. Some
                    devices use their own implementation of device APIs (i.e. Geolocation on Blackberry OS 4.6) or even
                    have absolutely no support for certain features (i.e. filesystem access on iOS).
                </p>
                <p>
                    This means you have to write workarounds of your code for different platforms and even for the same
                    browser running on different platform versions. But the web wouldn’t be the web if there wasn’t
                    already a solution for almost all of these problems. And so there are sites, libraries and services
                    like <a href="http://caniuse.com">caniuse.com</a>, <a href="http://modernizr.com">Modernizr</a> or{' '}
                    <a href="http://fitml.com">fitml.com</a> where you can build quick and clean workarounds to handle
                    fragmentation issues with only a minimum of effort. You still only need to write most parts of your
                    web app once.
                </p>
                <h2>Server-Side vs. Client-Side Adaption</h2>
                <p>
                    Basically there are two different approaches to professional mobile web development if you aim to
                    deliver a great user experience. Either way you will have to determine which (type of) device is
                    sending a request to your website and then you need to “guess” (server-side) or test (client-side)
                    what features are supported by the according device.
                </p>
                <h3>Server-Side Detection and User Agent Sniffing</h3>
                <p>
                    The first possible way is to do so using the so called “user agent sniffing” on the server-side and
                    then let your server create and deliver an optimized version of your site to the client. Serverside
                    detection is usually based on large databases containing the user agents of thousands of devices and
                    their capabilities. The most common use of server side adaption is image scaling on the server to
                    save some bytes when delivering a big image to a mobile device. In most cases it is not necessary to
                    deliver a 800×600 JPG with a file size of 120K to a device whose display resolution is only 320×480.
                    So you typically resize the image to the display size of the mobile device and then serve a much
                    smaller version to the client.
                </p>
                <p>
                    Service-side detection can be a good choice for other reasons. You can also decide which markup to
                    deliver based on the user agent of the accessing device. If you have a visitor with an iPhone or an
                    Android phone you can serve a nice HTML5 document while users with old Nokia devices will receive an
                    old fashioned XHTML 1.1 document.
                </p>
                <p>
                    The advantage of server-side adaption is that you optimize all the content to serve only what a
                    client probably really needs. And “probably” is also the problem here. New devices are released so
                    often it is hard to keep a device database entirely upto- date. There are some commercial providers
                    for device databases (<a href="http://wurfl.sf.net">WURFL</a>,{' '}
                    <a href="http://deviceatlas.com">DeviceAtlas</a>, <a href="http://www.fitml.com/">fitml.com</a> for
                    example) if you want to realize mobile web projects with server-side user agent detection I strongly
                    recommend you consider one of these as they have full time employees actively maintaining their
                    databases and do a lot of work that would be impractical for you to do yourself.
                </p>
                <p>
                    Pitfall here: user agents can be “wrong”, manipulated or unknown. You should therefore always
                    provide a fallback in case your user agent detection fails. Such a fallback could be a document in a
                    format (i.e. HTML4) that almost every mobile browser released in the past 5 years can understand.
                </p>
                <h3>Client-Side Adaption and Feature Detection</h3>
                <p>
                    Client-side feature detection is the second approach to create a great user experience on mobile
                    websites. Feature detection in general means that you use JavaScript to look if a certain capability
                    is supported on the accessing device. To give you a first impression: you can use{' '}
                    <code>if(navigator.geolocation)</code> to check if a device supports acquiring of the user’s current
                    position.
                </p>
                <p>
                    Feature detection also means that you will have to deliver the complete document with all possible
                    features of the website in it and then gracefully degrade it by removing features which are not
                    supported on the device. That means you are sending a lot of content to all devices regardless of
                    whether a certain feature is supported on a device or not.
                </p>
                <p>
                    One big advantage compared to server-side adaption: when a feature test passes you can (under normal
                    conditions) be sure that your desired feature or behavior will work as expected even if a user agent
                    was modified and therefore was not recognized properly by a device capability database.
                </p>
                <p>
                    The Modernizr JavaScript library is probably the first place to go when it comes to client-side
                    feature detection. Modernizr covers a lot of possible browser capabilities and provides a simple API
                    to check for support of a certain feature. If you need to know whether a browser supports Drag and
                    Drop or not, just use the Modernizr library this way:
                </p>
                <pre>
                    if (Modernizr.draganddrop){' '}
                    {
                        // browser supports native drag and drop
                    }{' '}
                    else{' '}
                    {
                        // fallback
                    }
                </pre>
                <p>
                    Another part that belongs to the client-side is the adaption of layout. On modern mobile browsers
                    you can use media queries which let you apply CSS rules only if a client or browser matches certain
                    conditions. You can easily show a two column layout when a device exceeds a display width of 800px
                    (on tablets for example) and fall back to a linear one column layout when a device’s display has a
                    resolution of less than 800px.
                </p>
                <p>
                    Issues concerning client-side approach: first there are some things, especially browser bugs, which
                    may be hard to detect on client side. Another big problem is that you always have to serve the whole
                    document with large scaled images and a bunch of JavaScript to the client since you do not know if
                    your visitor is using a bleeding-edge hipster browser from Cupertino or an oldschool “I don’t know
                    what JavaScript is” browser from 2003.
                </p>
                <h3>Why not just use the best of both worlds?</h3>
                <p>
                    Excellent idea! There is of course no rule that forbids to combine both server-side and client-side
                    technology to create an even better user experience. So you can try to determine the basics (“which
                    markup should be used?”, “what is the correct size for images?”, “JavaScript support, yes or no?”)
                    on the server and let the client handle the rest. You can provide server-side fallbacks for
                    JavaScript enhancement to make a site accessible and so you can create mobile websites which even
                    work fine on old devices.
                </p>
                <p>
                    A commercial platform working according to this principle is fitml.com where you describe your
                    content in an abstract XML markup called FITML, the platform then converts your markup to the best
                    suitable output format and optimizes both on serverside and on client-side.
                </p>
                <h2>Hybrid Apps</h2>
                <p>
                    If you necessarily want (or need) to publish your mobile app on Android Market, Apple Appstore, etc.
                    you can also create a “hybrid app”. Create your app completely by using common web technologies
                    (HTML, CSS, JavaScript) and then compile it as app. Sounds easy? It is. There are several hybrid app
                    frameworks which let you create native apps with only a single HTML5 web app as shared base. There
                    is PhoneGap2, Appcelerator3 or Apparat. io4 and probably many more you can use to achieve this.
                </p>
                <p>
                    How does it work exactly? Write your complete application in HTML5 just as you were about to publish
                    it to the web. Then you use one of the frameworks to compile your web app as native app. The
                    framework creates some sort of “wrapper app” which embeds your web app in a “web view” and it can
                    then be installed as regular application on several different platforms. The big plus of doing it
                    this way is that you only have one web app as the base and thus you can reduce your costs for
                    development and maintaining but the result is still a “real” native app.
                </p>
                <p>
                    Small downer: although frameworks let you use features in your web app which you usually cannot use
                    in a browser hybrid apps are not a complete substitute for native apps. They offer some nice
                    advanced functions like vibration, access to camera or address book but in its core it still is a
                    web app. That means you will have to create your own user interface which might be slower and you
                    also cannot use really everything as you can when creating an app using the native SDK.
                </p>
                <h2>Lessons learned</h2>
                <p>
                    The gap between native apps and web apps is rapidly decreasing. Browser vendors did a lot of good
                    work in the past few years and implemented many features which were only available in native apps.
                    There are different approaches to create great mobile websites which can look and even feel a lot
                    like a native app and new devices will be released that have even better support for HTML5 and its
                    device specific enhancements.
                </p>
                <p>
                    Creating mobile websites or mobile web apps makes your content accessible over the web on almost
                    every platform with only little work compared to native development for several platforms. It can
                    thus save you a lot of costs for development and maintenance. Due to the existence of hybrid app
                    frameworks you can even publish your apps in app stores.
                </p>
                <p>
                    If you have never developed a mobile website or web app before or if you were not convinced because
                    of the poor browsers in the early days of the mobile web you should give it another try. Consistent
                    support of the many different features is still far from perfect but it has been improved by at
                    least 1000% since the rise and success of Android and iOS.
                </p>
                <p>
                    When you became curious and want to create a mobile website always have one thing in mind:{' '}
                    <strong>make your mobile website mobile, not just smaller!</strong>
                </p>
            </article>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en')),
    },
});
