import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard';
import JetButton from '@/Jetstream/Button';
import JetCheckbox from '@/Jetstream/Checkbox';
import JetInput from '@/Jetstream/Input';
import JetLabel from '@/Jetstream/Label';
import JetValidationErrors from '@/Jetstream/ValidationErrors';

export default function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    name: '',
    email: '',
    username: '',
    password : '',
    secondaryEmail: '',
    terms: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (
    <JetAuthenticationCard>
      <Head title="Register" />

      <JetValidationErrors className="mb-4" />
      <h1 className="text-center">Solicitar cuenta</h1>
      <form onSubmit={onSubmit}>
        <div>
          <JetLabel htmlFor="name">Nombre Completo</JetLabel>
          <JetInput
            id="name"
            type="text"
            className="mt-1 block w-full"
            value={form.data.name}
            onChange={e => form.setData('name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="name"
          />
        </div>



        <div>
          <JetLabel htmlFor="username">Nombre de Usuario</JetLabel>
          <JetInput
            id="username"
            type="text"
            className="mt-1 block w-full"
            value={form.data.username}
            onChange={e => form.setData('username', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="username"
          />
        </div>

        <div className="mt-4">
          <JetLabel htmlFor="email">Correo electrónico principal</JetLabel>
          <JetInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
          />
        </div>

        <div className="mt-4">
          <JetLabel htmlFor="secondaryEmail">Correo electrónico secundario</JetLabel>
          <JetInput
            id="secondaryEmail"
            type="email"
            className="mt-1 block w-full"
            value={form.data.secondaryEmail}
            onChange={e => form.setData('secondaryEmail', e.currentTarget.value)}
            required
          />
        </div>

      {/*    <div className="mt-4">
          <JetLabel htmlFor="password">Password</JetLabel>
          <JetInput
            id="password"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <div className="mt-4">
          <JetLabel htmlFor="password_confirmation">Confirmar C</JetLabel>
          <JetInput
            id="password_confirmation"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password_confirmation}
            onChange={e =>
              form.setData('password_confirmation', e.currentTarget.value)
            }
            required
            autoComplete="new-password"
          />
        </div> */}

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-4">
            <JetLabel htmlFor="terms">
              <div className="flex items-center">
                <JetCheckbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                />

                <div className="ml-2">
                  I agree to the
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </JetLabel>
          </div>
        )}

        <div className="flex items-center justify-end mt-4">
          <InertiaLink
            href={route('login')}
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Ya tienes una cuenta?
          </InertiaLink>

          <JetButton
            className={classNames('ml-4', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Registrarse
          </JetButton>
        </div>
      </form>
    </JetAuthenticationCard>
  );
}
