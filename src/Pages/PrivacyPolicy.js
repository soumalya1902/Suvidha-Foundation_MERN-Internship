import React, { useLayoutEffect } from "react";
import '../Components/Component_CSS/PrivacyPolicy.css'

const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="policy">
      <h2 className="title">Privacy Policy</h2>
      <p>
        We at Suvidha Mahila Mandal respect your concerns about privacy and
        value the relationship we have with you. We are committed to the ethical
        collection, retention and use of information that you provide to us
        about yourself (“Personal Information”) on our website. This policy
        describes the types of personal information we collect, how we may use
        that information and with whom we may share it when you visit our site
        or use our services (collectively the “Services”). <br /> Our Privacy
        Policy also describes the measures we take to protect the security of
        the information. In addition, we describe the choices you can make about
        how we use the information you provide to us. We also tell you how you
        can reach us to update your contact information, remove your name from
        our mailing lists, or answer any questions you may have about our
        privacy practices. We maintain full confidentiality of all donors and
        contributors on our mailing and email lists, which will neither be sold
        to nor exchanged with any other organization or commercial enterprise,
        and we honour donors' opt-out choices in our mail, email, phone and
        other solicitations.
      </p>
      <h4 className="title">How Do We Use Your Information?</h4>
      <p>
        Suvidha Mahila Mandal uses personally identifiable information you
        provide about yourself: <br />
      </p>
        <ul>
          <li>To process your donation</li>
          <li>To send you a receipt for your donation</li>
          <li>
            To send you a thank you note for your donation or volunteering.
          </li>
          <li>
            To respond to your questions or comments about Suvidha Mahila Mandal
          </li>
          <li>
            To send you additional information about Suvidha Mahila Mandal
            Projects
          </li>
          <li>
            To send you invitations for upcoming events that may interest you
          </li>
        </ul>
      <h4 className="title">Email Communications</h4>
      <p>
        When you ask us to send you email such as a free email newsletter, you
        may provide us with certain information such as your email address so we
        can fulfil your request. You may choose to provide additional
        information as well, such as your postal address and phone number. 
      </p>
      <h4 className="title">Donations</h4>
      <p>
        When you make a donation through our Site, we may ask you to submit
        certain personal information (such as credit card information) so we can
        process your donation. We also maintain your contact information in our
        records so we can contact you to provide ChildFund India's program
        information and information on additional giving opportunities.
      </p>
      <h4 className="title">Is Donation Secure?</h4>
      <p>
        Absolutely. The security and confidentiality of your information is our
        highest priority. We use industry-standard SSL (secure socket layer)
        technology to protect your information and provide a safe and secure
        environment for online donations. 
      </p>
      <h4 className="title">Credit / Debit Card Security</h4>
      <p>
        Suvidha Mahila Mandal is grateful for the donations that help us
        continue our valuable work. When you donate to Suvidha Mahila Mandal
        online, your card information is secured; your credit card number is
        used only for that particular transaction and is not stored. If you
        allow us to store your credit card or bank information for future use
        such as recurring donation, such information will be stored by the
        payment services financial institution. Suvidha Mahila Mandal only uses
        financial institution that adheres to the industry standards for storing
        such information. 
      </p>
      <h4 className="title">Disclosure Of Data</h4>
      <p>
        Suvidha Mahila Mandal may disclose your Personal Data in the good faith
        belief that such action is necessary to: <br />
      </p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>
            To protect and defend the rights or property of Suvidha Mahila
            Mandal 
          </li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service 
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>
      <h4 className="title">Security Of Data</h4>
      <p>
        Suvidha Mahila Mandal has the necessary security mechanisms in place and
        only designated employees have access to your personal information. We
        maintain administrative, technical and physical safeguards to protect
        against unauthorized disclosure, use, alteration or destruction of the
        personal information in our possession. <br />
        All online transactions are done on a secure server. When you provide
        credit card information to make a donation, we use the industry standard
        for Internet security ― Secure Socket Layer (SSL) technology ― to help
        protect the information you provide. <br />
        This Internet encryption standard scrambles data as it travels from your
        computer to our server. Please note, however, that perfect security does
        not exist on the Internet. You'll know that you're in a secure area of
        our Site when a “lock” icon appears on your screen and the “http”
        portion of our URL address changes to “https.” The “s” stands for
        “secure.”
      </p>
      <h4 className="title">Updates to This Privacy Policy</h4>
      <p>We may change or update portions of this Privacy Policy at any time and without prior notice to you. Please check back from time to time so you are aware of any changes or updates to the Policy. You may reach out to us if you have any queries about any changes made to our practices.</p>
    </div>
  );
};

export default PrivacyPolicy;
