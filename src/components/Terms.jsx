import React from "react";

const terms = [
  {
    title: "Terms",
    content: `
      By accessing this Website, accessible from <b>magicscale.in</b>, you agree to be bound by these Website Terms and Conditions of Use and accept responsibility for compliance with applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by <b>copyright</b> and <b>trademark laws</b>.
    `,
  },
  {
    title: "Use License",
    content: `
      Permission is granted to temporarily download one copy of the materials on <b>MagicScale’s Website</b> for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:<br>
      - <b>Modify</b> or <b>copy</b> the materials;<br>
      - Use the materials for any <b>commercial purpose</b> or public display;<br>
      - Attempt to <b>reverse-engineer</b> any software contained on MagicScale’s Website;<br>
      - Remove any <b>copyright</b> or proprietary notations from the materials; or<br>
      - Transfer the materials to another person or “mirror” the materials on any other server.<br><br>
      Violation of these restrictions may result in termination of your access rights by MagicScale. Upon termination, any downloaded materials in your possession, whether in printed or electronic format, must be destroyed.
    `,
    
  },
  {
    title: "Disclaimer",
    content: `
      All materials on <b>MagicScale’s Website</b> are provided <b>'as is.'</b> MagicScale makes no warranties, either express or implied, and hereby disclaims and negates all other warranties. Furthermore, MagicScale does not make any representations concerning the <b>accuracy</b> or <b>reliability</b> of the use of materials on its Website or otherwise relating to any linked sites.
    `,
  },
  {
    title: "Limitations",
    content: `
      MagicScale or its suppliers will not be held liable for any <b>damages</b> arising from the use or inability to use materials on MagicScale’s Website, even if MagicScale or an authorized representative has been notified of the possibility of such damage. Jurisdictions that do not allow limitations on implied warranties or liability for incidental damages may not apply to you.
    `,
  },
  {
    title: "Revisions and Errata",
    content: `
      The materials appearing on <b>MagicScale’s Website</b> may include technical, typographical, or photographic errors. MagicScale does not warrant that any materials on its Website are <b>accurate, complete,</b> or <b>current</b>. MagicScale may make changes to the materials on its Website at any time without notice but does not commit to updating them.
    `,
  },
  {
    title: "Links",
    content: `
      MagicScale has not reviewed all sites linked to its Website and is not responsible for the contents of any linked site. The inclusion of any link does not imply <b>endorsement</b> by MagicScale. Use of any linked website is at the user's own risk.
    `,
  },
  {
    title: "Site Terms of Use",
    content: `
      <b>Modifications:</b> MagicScale may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you agree to be bound by the current version of these Terms and Conditions of Use.
    `,
  },
  {
    title: "Governing Law",
    content: `
      Any claim related to <b>MagicScale’s Website</b> shall be governed by the laws of <b>India</b> without regard to conflict of law provisions.
    `,
  },
  {
    title: "Product Delivery",
    content: `
      After making payment, you will receive an <b>email</b> with instructions for creating your ID and password to log in to the member area. If you’ve enrolled for a webinar, you will receive the webinar details via <b>WhatsApp</b>, including the date and Zoom link. If you do not receive an email, contact us at <b>support@magicscale.in</b>.
    `,
  },
  {
    title: "Changes to Terms",
    content: `
      MagicScale reserves the right to <b>update or amend</b> these Terms of Service at any time. Users are encouraged to review this Terms regularly.
    `,
  },
  {
    title: "Contact Us",
    content: `
      If you have questions or concerns regarding this policy:<br>
      <b>Email:</b> support@magicscale.in<br>
      <b>Phone:</b> +91 8826073117<br>
      <b>Address:</b> H.No 72, Navyug Public School, Rajokari, New Delhi - 110038
    `,
  },
];

const Terms = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="bg-indigo-500 dark:bg-indigo-600 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">TERMS OF SERVICE - Vishal Kushwaha</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px] dark:text-gray-300">
        {terms.map((term, index) => {
          return (
            <div key={index} className="py-4 border-b-2 border-gray-50 dark:border-slate-800">
              <h2 className="text-[30px] pb-2 font-extrabold text-[#333] dark:text-white">
                {term.title}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: term.content }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terms;
