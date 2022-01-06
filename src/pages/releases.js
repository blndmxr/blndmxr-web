import React, {useState, useEffect} from "react";
import { Button, Col, Row, Badge } from "reactstrap";
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { faPaperclip, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CopyToClipboard from "../components/copy-to-clipboard";
import { Link } from 'gatsby'



const ReleasesHero = () =>  { 
   return (
        <div
            className="hero"
            style={{
                background: `linear-gradient(#0552B1,#3D91F9), no-repeat center center fixed `,
                minHeight: '0vh',
                margin: '-5rem -2rem 0',
            }}
        >
            <div
                style={{
                    color: '#fff',
                    margin: '0% 8%',
                    padding: '10vh 2rem',
                    textAlign: 'center'
                }}
            >
                <Row style={{     display: 'flex', alignItems: 'center'}}>
                    <Col sm="4">
                        <h1 className="brand-title">releases</h1>
                    </Col>

                    {/* make links dynamic */}
                    <Col xs="12" sm="4" md="4" lg="">
                    <div className="hero-fourth-text">
                        <p >Windows (.exe): </p>
                        <p>release: v1.0.0</p>
                    </div>
                        <Button href="https://github.com/blndmxr/blndmxr-mixer-electron/releases/download/v0.0.1/blindmixer-0.0.1-Setup.exe" color="secondary">Download windows setup</Button> {<br/>}
                        <a href="https://github.com/blndmxr/blndmxr-mixer-electron/releases/download/v0.0.1/blindmixer-win32-x64.tar.gz" style={{color: '#fff'}}><FontAwesomeIcon icon={faPaperclip} />zipped folder</a>

                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                    <div className="hero-fourth-text">
                        <p >Linux (.deb): </p>
                        <p>release: v1.0.0</p>
                    </div>
                        <Button href="https://github.com/blndmxr/blndmxr-mixer-electron/releases/download/v0.0.1/blindmixer_0.0.1_amd64.deb" color="secondary">Download Linux setup</Button> {<br/>}
                        <a href="https://github.com/blndmxr/blndmxr-mixer-electron/releases/download/v0.0.1/blindmixer-linux-x64.tar.gz" style={{color: '#fff'}}><FontAwesomeIcon icon={faPaperclip} />zipped folder</a>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                    <div className="hero-fourth-text">
                        <p >shasums to verify the authenticity of your download: </p>
                    </div>
                        <Button href="https://github.com/blndmxr/blndmxr-mixer-electron/releases/download/v0.0.1/shasums.txt.asc" color="secondary">Download</Button> {<br/>}
                    </Col>
                </Row>
            </div>
        </div>
    )
} 


const HowandWhy = () => { 
    return (
    <SectionDiv>
        {<br/>}
    <h1> Why is there an additional wallet? What's the purpose?</h1>
    <p>
        This is a valid question. An electron implementation of blindmixer has been created for a number of purposes, with the most notable one of them being: heightened security and privacy.
    </p>
    <p>
      When you load the blindmixer wallet in your browser, you assume that <code>blindmixer.com</code> belongs to <i>"us"</i>, the <i>"original"</i> blindmixer developers. However, through malice, error, or other circumstances, it can happen that either the domain name, or the wallet script is corrupted and or harmful.
      In that case, your browser will still load the <i>"script"</i>: (<i>read:</i> <b>wallet</b>), as long as the checksum is correct, which can cause a loss of funds.
    </p>
    <p>
        Using the electron wallet, you yourself specify the version of the wallet you'd like to use, and subsequently both the URL and the checksum. An attacker can in no way modify the code in such a way that the checksum is still valid, and thus, as long as the script was <i>originally</i> untempered with, cannot affect you.
    </p>
    <p>
        An example of such an attack whereby the electron user is protected, and the web user is not is a domain hijacking. The web user will automatically load the new wallet file, whereas the electron user will attempt to load the originally specified script (with the original checksum), or nothing at all.
    </p>

    <p>
    Additional privacy is attained because of the wallet's harded-coded policy of routing traffic through tor and tor alone. If access to tor is restricted in your country, you might not be able to use the wallet.
    </p>
    
    <hr/>
    <br/>
    <h2 id="verify-wallet-exec">Verify Wallet Files
                        <a href="#verify-wallet-exec" className="anchor-section float-right">#</a>
                    </h2>
    <p>
        There are two ways you can get the keys to verify the wallet signatures. Either import them manually for which they can be found here. <a href="https://keybase.io/jameslemarkven/pgp_keys.asc"> 1CE3 A7D2 4275 2B94 70F6  585F 9123 3C86 5A2C AC09</a>
    </p>
<p>Or you can also import the key using the fingerprint using the following command:
</p>
<Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
        <code>gpg --keyserver hpk://keyserver.ubuntu.com --recv-keys 1CE3A7D242752B9470F6585F91233C865A2CAC09</code>
         </Col> 
    {/* <p>
        After that, you can either download the accompanying signature and verify that against your respective redistributable, which should check out.
    </p> */}
    <p>
        After that you can calculate the hash of the redistributable yourself and compare it against our signed hashes which can be found <a href="https://github.com/blndmxr/blndmxr-mixer-electron/releases/download/v0.0.1/shasums.txt.asc">here</a>
    </p>
    </SectionDiv>)
}


// updates down for now
const LatestUrl = () => { 
    
    const [version, setData] = useState(null)
    const getData = () =>fetch(`https://updates.blindmixer.com/`).then((res) => res.status === 200 ? res.json() : null).catch(error => alert(error.message));
    
    useEffect(() => {
       getData().then((data) => setData(data))
    }, [])

    if (version === undefined) {
        return <div>Fetching version!</div>
      }

    return (
        <SectionDiv>
         {<br/>}{<hr/>}
         <h2 id="load-latest-url">Latest Version Url
                        <a href="#load-latest-url" className="anchor-section float-right">#</a>
                    </h2>
        <p>
            You might be wondering: how do I know I am loading the <i>real</i> wallet file?
            We will periodically update the latest version url to appear right below. However, as we have just explained, domain hijackings can happen at random.
            Therefore, it might be possible that the url linked below is also malicious. Please always verify the integrity before updating!<br/>
        </p>

        <p>
        Make sure to verify that the fingerprint matches the one on github. If you're in doubt, contact our support!
        </p>

       {version != null ?  <Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
    The version URL has last been changed on <strong>{JSON.stringify(new Date(version.latestDate).toLocaleDateString()).replace(/"/g, '')}</strong> which is <strong>~{JSON.stringify(Math.round((new Date().getTime() - new Date(version.latestDate).getTime()) / (60*60*24*1000)))}</strong>  days ago!
         </Col> : undefined}
        <p>
            The current version URL is as following:
        </p>
        {version != null ?
        <CopyToClipboard className="btn btn-light" style={{}} text={version.versionScript}>
        {JSON.stringify(version.versionScript).replace(/"/g, '')} {" "}
         <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard> : undefined } 
        <p> 
            For which the signature is as following: 
        </p>
        {version != null ?
       <div> <Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
        <code>{version.signature}</code>
 </Col> <Button color="primary" href={`data:text/json;charset=utf-8,${encodeURIComponent(version.signature)}`} download={`blindmixer_wallet_url_v1.0.0_sig.asc`}>Download sig!</Button></div>: undefined } {<br/> }
        <p>
            As explained, the signature should verify with the key belonging to the fingerprint linked above.
        </p> 
        </SectionDiv>

    )
}

const Releases = () => { 
    return ( 
        <Layout isHomepage={true}>
            <ReleasesHero/>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
            <HowandWhy/>
            <LatestUrl/>
            </Col>
            </Row>
            </Layout>
    )
}



export default Releases
