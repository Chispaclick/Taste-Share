import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

function Settings() {
  return (
    <>
      <div className="bg-background text-gray-300 p-8 mt-10">
        <h1 className="text-3xl text-amber-600 font-bold my-4 animate__animated animate__fadeInUp">
          Settings
        </h1>
        <ul className="space-y-4">
          <li>
            <Link
              href="/settings/change-profile-picture"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Change Profile Picture
            </Link>
          </li>
          <li>
            <Link
              href="/settings/change-name"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Change Name
            </Link>
          </li>
          <li>
            <Link
              href="/settings/dark-light-mode"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Light/Dark Mode
            </Link>
          </li>
          <li>
            <Link
              href="/settings/billing-address"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Billing Address
            </Link>
          </li>
          <li>
            <Link
              href="/settings/linked-accounts"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Linked Accounts
            </Link>
          </li>
          <li>
            <Link
              href="/settings/payment-methods"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Payment Methods
            </Link>
          </li>
          <li>
            <Link
              href="/settings/privacy"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/settings/security"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Security
            </Link>
          </li>
          <li>
            <Link
              href="/settings/notifications"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Notifications
            </Link>
          </li>
          <li>
            <Link
              href="/settings/logout"
              className="text-amber-600 font-bold text-lg block p-4 rounded-md text-center"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
}

export default Settings;
