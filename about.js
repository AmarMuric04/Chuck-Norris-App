document.querySelector(".tos").addEventListener("click", function () {
  window.location.hash = "#terms-and-conditions";
  checkHash();
});
document.querySelector(".privacy").addEventListener("click", function () {
  window.location.hash = "#privacy-policy";
  checkHash();
  console.log(123);
});
document.querySelector(".cpn").addEventListener("click", function () {
  window.location.hash = "#copyright-notice";
  checkHash();
});
document.querySelector(".contact").addEventListener("click", function () {
  window.location.hash = "#contact-us";
  checkHash();
});
document.querySelector(".about").addEventListener("click", function () {
  window.location.hash = "#about-us";
  checkHash();
});
document.querySelector(".faq").addEventListener("click", function () {
  window.location.hash = "#frequently-asked-questions";
  checkHash();
});

const checkHash = function () {
  if (window.location.hash === "#terms-and-conditions") {
    document.querySelector(
      ".main-page"
    ).innerHTML = ` <h1>Terms and Conditions</h1>

      <p>Last Updated: 1/12/2024</p>
      <p>
        Welcome to Chuck Norris Facts Galore the ultimate source of Chuck
        Norris wisdom! These Terms and Conditions govern your use of
        the Chuck Norris Facts Galore website and its related
        services. By accessing or using the Site, you agree to be bound by these
        Terms. If you do not agree with any of these terms, please refrain from
        using the Site.
      </p>
      <h2>1. Chuck Norris Facts API</h2>
      <p>
        The Chuck Norris Facts Galore website utilizes a Chuck Norris API to
        provide users with a vast collection of Chuck Norris facts. Users
        acknowledge and agree that the Chuck Norris API is a third-party
        service, and its use is also subject to the terms and conditions of the
        API provider. Chuck Norris Facts Galore does not control or guarantee
        the accuracy, completeness, or availability of the Chuck Norris API.
      </p>
      <h2>2. User Accounts</h2>
      <p>
        Some features of the Site may require you to create a user account. You
        agree to provide accurate and complete information during the
        registration process and to update your information to keep it accurate.
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>

      <h2>3. User-Generated Content</h2>
      <p>
        Users may have the opportunity to submit content, such as comments or
        Chuck Norris facts, to the Site. By submitting content, you grant Chuck
        Norris Facts Galore a non-exclusive, worldwide, royalty-free, and
        transferable license to use, reproduce, distribute, and display the
        content in connection with the Site.
      </p>

      <h2>4. Prohibited Activities</h2>

      <ul>
        <strong> When using the Site, you agree not to: </strong>
        <li>Violate any laws or regulations.</li>
        <li>Infringe on the intellectual property rights of others.</li>
        <li>
          Engage in unauthorized access or use of the Site or its systems.
        </li>

        <li>
          Post or transmit any content that is unlawful, threatening,
          defamatory, obscene, or otherwise objectionable.
        </li>
      </ul>

      <h2>5. Intellectual Property</h2>

      <p>
        The content on this Site, including Chuck Norris facts and any related
        materials, is protected by copyright and other intellectual property
        laws. You may not reproduce, distribute, or create derivative works
        without explicit permission from Chuck Norris Facts Galore.
      </p>
      <h2>6. Termination</h2>
      <p>
        Chuck Norris Facts Galore reserves the right to terminate or suspend
        your access to the Site, without notice, for any reason, including a
        breach of these Terms.
      </p>
      <h2>7. Disclaimer of Warranty</h2>

      <p>
        The Site is provided "as is" without any warranties, express or implied.
        Chuck Norris Facts Galore makes no representations or warranties
        regarding the accuracy, completeness, or reliability of the Chuck Norris
        facts or the functionality of the Site.
      </p>
      <h2>8. Limitation of Liability</h2>
      <p>
        Chuck Norris Facts Galore, its affiliates, and its partners shall not be
        liable for any direct, indirect, incidental, special, or consequential
        damages arising out of or in any way connected with the use of the Site
        or the Chuck Norris API.
      </p>

      <h2>9. Modification of Terms</h2>
      <p>
        Chuck Norris Facts Galore reserves the right to modify or update these
        terms at any time. Your continued use of the Site after such
        modifications constitutes acceptance of the updated terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        This Agreement is governed by and construed in accordance with the laws
        of Murga's laws. Any legal action arising out of or relating to
        these terms shall be filed only in the applicable courts of Murga's laws.
      </p>

      <h2>Contact Information:</h2>

      <p>
        If you have any questions or concerns regarding these Terms and
        Conditions, please contact us at chucknorris-contact@gmail.com.
      </p>
      <p>
        Thank you for being a part of Chuck Norris Facts Galore – where Chuck
        Norris facts are legendary!
      </p>`;
  }
  if (window.location.hash === "#privacy-policy") {
    document.querySelector(".main-page").innerHTML = `  <h1>Privacy Policy</h1>

      <p>Last Updated: 1/11/2024</p>

      <p>
        Welcome to Chuck Norris Facts Galore the ultimate source of Chuck Norris wisdom!
        This Privacy Policy outlines how Chuck Norris Facts Galore collects, uses, and
        protects your personal information when you access or use our website
        (the "Site"). By using the Site, you agree to the terms outlined in this
        Privacy Policy.
      </p>
      <h2>1. Information We Collect</h2>
      <ul>
        <span> 1.1 Usage Information </span>
        <li>
          We collect information about your interactions with the Site,
          including your IP address, browser type, and device information.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>

      <ul>
        <span> 2.1 Chuck Norris Facts </span>
        <li>
          To deliver Chuck Norris facts tailored to your preferences and enhance
          your user experience.
        </li>
      </ul>
      <ul>
        <span> 2.2 Site Improvement </span>

        <li>
          To analyze Site usage patterns, troubleshoot issues, and enhance the
          functionality and performance of the Site.
        </li>
      </ul>

      <h2>3. How We Protect Your Information</h2>
      <p>
        We take reasonable measures to safeguard your information from
        unauthorized access, disclosure, alteration, and destruction. However,
        please note that no method of transmission over the internet or
        electronic storage is completely secure.
      </p>
      <h2>4. Cookies</h2>

      <p>
        The Site uses cookies to enhance user experience. You can set your
        browser to refuse cookies or alert you when cookies are being sent.
        Please note that disabling cookies may affect the functionality of the
        Site.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these sites. We
        encourage users to be aware when leaving our site and to read the
        privacy statements of any website that collects personally identifiable
        information.
      </p>
      <h2>6. Children's Privacy</h2>
      <p>
        The Site is not directed at individuals under the age of 13. We do not
        knowingly collect personal information from children. If you are a
        parent or guardian and believe your child has provided us with personal
        information, please contact us, and we will take steps to remove that
        information from our systems.
      </p>
      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Users will be notified
        of any changes on our Privacy Policy page. Continued use of the Site
        after such modifications constitutes acceptance of the updated policy.
      </p>
      <h2>8. Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at chucknorrisfacts@gmail.com.
      </p>

      <p>
        Thank you for being a part of Chuck Norris Facts Galore – where Chuck Norris facts
        are legendary!
      </p>`;
  }
  if (window.location.hash === "#frequently-asked-questions") {
    document.querySelector(".main-page").innerHTML = `
     <h1>Frequently Asked Questions (FAQ)</h1>

      <h2>
        Welcome to Chuck Norris Facts Galore! Below are some commonly asked
        questions to help you navigate and enjoy our website:
      </h2>

      <h2>General Questions:</h2>
      <p>Q1: What is Chuck Norris Facts Galore?</p>
      <strong>
        A1: Chuck Norris Facts Galore is a website dedicated to providing an
        extensive collection of Chuck Norris facts, showcasing the legendary and
        humorous side of Chuck Norris.
      </strong>
      <p>Q2: Who creates the Chuck Norris facts?</p>
      <strong>
        A2: The Chuck Norris facts are sourced from various humorous sources and
        fan submissions. They are meant for entertainment purposes and not
        intended to be taken seriously.
      </strong>
      <h2>Using the Website:</h2>
      <p>Q3: How can I view Chuck Norris facts?</p>

      <strong
        >A3: Simply navigate to our homepage, and Chuck Norris facts will be
        displayed randomly. You can also use the search bar or explore different
        categories for specific facts.</strong
      >

      <p>Q4: Are the Chuck Norris facts true?</p>
      <strong
        >A4: No, the Chuck Norris facts are exaggerated and intended for comedic
        purposes. They are fictional and not based on reality.
      </strong>
      <p>Q5: Can I submit my Chuck Norris fact?</p>
      <strong
        >A5: Currently, we don't have a submission feature. However, we
        appreciate your enthusiasm. Feel free to contact us with your Chuck
        Norris fact, and we might feature it!</strong
      >
      <h2>Account and Privacy:</h2>
      <p>Q6: Do I need to create an account to use the site?</p>
      <strong>
        A6: No, Chuck Norris Facts Galore does not require user accounts. You
        can enjoy the Chuck Norris facts without any sign-up.
      </strong>

      <p>Q7: How is my privacy protected on this site?</p>
      <strong>
        A7: We take privacy seriously. Please refer to our Privacy Policy for
        detailed information on how we collect, use, and protect your data.
      </strong>
      <h2>Technical Issues:</h2>

      <p>Q8: I'm experiencing issues with the site. What should I do?</p>
      <strong>
        A8: If you encounter technical problems, try refreshing the page or
        clearing your browser cache. If the issue persists, feel free to contact
        us with details about the problem.
      </strong>
      <p>Q9: Is the website mobile-friendly?</p>

      <strong>
        A9: Yes, our website is designed to be responsive and works well on
        various devices, including smartphones and tablets.
      </strong>
      <h2>Contact and Support:</h2>
      <p>Q10: How can I contact Chuck Norris Facts Galore?</p>

      <strong>
        A10: For general inquiries, you can reach out to us at chucknorris-contact@gmail.com. We're here to help and appreciate your feedback!
      </strong>
      <p>
        Please note that these FAQs are for informational purposes, and the
        answers may be updated over time. If you have additional questions, feel
        free to contact us. Enjoy your Chuck Norris facts adventure!
      </p>`;
  }
  if (window.location.hash === "#copyright-notice") {
    document.querySelector(".main-page").innerHTML = `<h1>Copyright Notice</h1>
      <p>Copyright © 2024 Chuck Norris Facts Galore. All rights reserved.</p>
      <p>
        The content, design, graphics, and other materials on this website are
        protected by copyright and other intellectual property laws. You may not
        reproduce, distribute, display, modify, or otherwise use any materials
        on this site without the prior written permission of Chuck Norris Facts
        Galore.
      </p>

      <strong>
        Unauthorized use of any materials on this website may violate copyright,
        trademark, and other laws. Chuck Norris Facts Galore reserves all rights
        not expressly granted in and to the website and its content.
      </strong>

      <p>
        For permission requests or inquiries, please contact us at
        chucknorris-copyright@gmail.com.
      </p>

      <p>Thank you for respecting our intellectual property rights.</p>`;
  }
  if (window.location.hash === "#contact-us") {
    document.querySelector(".main-page").innerHTML = `<h1>Contact Us</h1>
      <h2>
        Thank you for visiting Chuck Norris Facts Galore! If you have any
        questions, feedback, or inquiries, feel free to reach out to us. We're
        here to assist you!
      </h2>

      <h2>Contact Information</h2>
      <p>Chuck Norris</p>
      <p>Chuck Norris Facts Galore</p>
      <p>8 Old York Court North Tonawanda, NY 14120</p>
      <p>New York, California, 10001</p>
      <p>chucknorris-contact@gmail.com</p>
      <p>+205 443 2214 521</p>

      <h2>General Inquiries</h2>

      <p>
        For general questions or information, please contact us at
        chucknorris-contact@gmail.com. We'll do our best to respond promptly.
      </p>
      <h2>Technical Support</h2>
      <p>
        Experiencing technical issues with the site? Reach out to our technical
        support team at chucknorris-help@gmail.com. Be sure to provide details
        about the problem, including the device and browser you're using.
      </p>

      <h2>Media and Press</h2>
      <p>
        For media inquiries or press-related matters, please contact our media
        relations team at chucknorris-media@gmail.com.
      </p>
      <h2>Submitting Chuck Norris Facts</h2>
      <p>
        While we currently don't have a submission feature on the website, we
        appreciate your Chuck Norris facts! Feel free to share them with us at
        chucknorris-submitfact@gmail.com, and your fact might be featured.
      </p>

      <h2>Visit Us</h2>
      <p>
        If you prefer in-person communication, you're always welcome to visit
        our headquarters at the address provided above during our business
        hours.
      </p>

      <h2>Feedback Form</h2>

      <p>
        We value your feedback! If you have a specific inquiry or request, you
        can also use the form below to get in touch with us:
      </p>

      <div>
        <div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Write some feedback..."
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button>Submit</button>`;
  }
  if (window.location.hash === "#about-us") {
    document.querySelector(".main-page").innerHTML = `
       <h1>About Us</h1>

      <p>
        Welcome to "Chuck Norris", the ultimate destination for Chuck Norris
        enthusiasts and humor seekers! Get ready to embark on a journey through
        a world of legendary Chuck Norris facts that will leave you entertained
        and amazed.
      </p>
      <h2>Our Story</h2>
      <p>
        At Chuck Norris, our mission is simple – to celebrate the legendary
        Chuck Norris through a collection of humorous and exaggerated facts that
        showcase his mythical prowess. Founded in 2024, our website has become a
        go-to source for fans looking to enjoy a good laugh and indulge in the
        whimsical side of Chuck Norris.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our primary goal is to spread joy and laughter through the timeless and
        fictional tales of Chuck Norris's extraordinary abilities. We believe in
        the power of humor to unite people and provide a lighthearted escape
        from the challenges of everyday life.
      </p>

      <h2>What Sets Us Apart</h2>
      <p>
        <strong> Extensive Collection: </strong> With over 20,000 Chuck Norris
        facts, we offer one of the largest and most diverse collections
        available online. Community Engagement: We love hearing from our
        community! Whether it's sharing your favorite Chuck Norris fact or
        reaching out with questions, we value every interaction.
      </p>

      <p>
        <strong>Quality Entertainment:</strong>
        We curate content with care, ensuring that each Chuck Norris fact on our
        site is designed to bring a smile to your face. Meet the Team
      </p>

      <p>
        Behind Chuck Norris Facts Galore is a passionate team dedicated to
        curating, updating, and maintaining this hub of Chuck Norris humor. Our
        diverse team brings a range of talents and a shared commitment to
        delivering top-notch entertainment.
      </p>

      <strong> Murga - Founder and Chief Chuck Norris Enthusiast </strong>

      <h2>Contact Us</h2>
      <p>
        We love connecting with our community! If you have questions, feedback,
        or just want to say hello, feel free to reach out to us at
        chucknorris-contact@gmail.com
      </p>

      <p>Thank You for Being a Part of Chuck Norris facts!</p>
      <p>
        We appreciate your support and enthusiasm as we continue to spread
        laughter and celebrate the legend that is Chuck Norris.
      </p>`;
  }
};

checkHash();
window.addEventListener("hashchange", checkHash);
