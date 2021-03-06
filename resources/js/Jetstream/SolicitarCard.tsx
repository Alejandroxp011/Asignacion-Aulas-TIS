import React, { PropsWithChildren } from 'react';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo';

export default function JetAuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-max flex flex-col sm:justify-center items-center bg-gray-100">
      <div>
 
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md  sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
