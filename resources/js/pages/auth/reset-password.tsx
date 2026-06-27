import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { update } from '@/routes/password';

type Props = {
    token: string;
    email: string;
    passwordRules: string;
};

export default function ResetPassword({ token, email, passwordRules }: Props) {
    return (
        <>
            <Head title="Reset password" />

            <Form
                {...update.form()}
                transform={(data) => ({ ...data, token, email })}
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <div className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="email" className="text-[#0F2A47] font-semibold">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={email}
                                className="border-slate-300 focus:border-[#1F5A96] focus:ring-[#1F5A96]"
                                readOnly
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="password" className="text-[#0F2A47] font-semibold">
                                Password
                            </Label>
                            <PasswordInput
                                id="password"
                                name="password"
                                autoComplete="new-password"
                                placeholder="Password"
                                passwordrules={passwordRules}
                                className="border-slate-300 focus:border-[#1F5A96] focus:ring-[#1F5A96]"
                                autoFocus
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="password_confirmation" className="text-[#0F2A47] font-semibold">
                                Confirm password
                            </Label>
                            <PasswordInput
                                id="password_confirmation"
                                name="password_confirmation"
                                autoComplete="new-password"
                                placeholder="Confirm password"
                                passwordrules={passwordRules}
                                className="border-slate-300 focus:border-[#1F5A96] focus:ring-[#1F5A96]"
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#DC143C] hover:bg-red-700 text-white font-semibold py-2.5"
                            disabled={processing}
                            data-test="reset-password-button"
                        >
                            {processing && <Spinner />}
                            Reset password
                        </Button>
                    </div>
                )}
            </Form>
        </>
    );
}

ResetPassword.layout = () => ({
    title: 'Reset password',
    description: 'Please enter your new password below',
});
