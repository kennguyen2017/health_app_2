import { useLogin } from '@/hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginRequestDto } from '@/services/auth.service';
import { Button, Col, Form, Input, Row } from 'antd';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { passwordRegExp } from '@/utils/string';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('common:username.required'),
  password: yup
    .string()
    .trim()
    .required('common:password.required')
    .min(8, 'common:password.short')
    .max(200, 'common:password.long')
    .matches(passwordRegExp, 'common:password.format'),
});

export function Login() {
  const router = useRouter();
  const { t } = useTranslation('login');
  const form = useForm<LoginRequestDto>({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = form;
  const { login, error } = useLogin();

  useEffect(() => {
    if (error) {
      setError('password', { message: t('login_error') });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const onToggleLanguageClick = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div>
      <div className="flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full space-y-5">
          <div className="text-center text-4xl">{t('header')}</div>
          <Form onFinish={handleSubmit(login)}>
            <Form.Item
              validateStatus={errors.username && 'error'}
              help={errors.username?.message && t(errors.username.message)}
              className="!pt-2"
            >
              <Controller
                control={control}
                name={'username'}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder={t('input.username.placeholder')}
                    className="antd-input-group-xl"
                  />
                )}
              />
            </Form.Item>
            <Form.Item
              validateStatus={errors?.password && 'error'}
              help={errors.password?.message && t(errors.password.message)}
              className="!pt-2"
            >
              <Controller
                control={control}
                name={'password'}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder={t('input.password.placeholder')}
                    className="antd-input-xl !rounded-md !h-[2.875rem]"
                  />
                )}
              />
            </Form.Item>
            <div className="pb-6">
              <Row>
                <Col span={24} className="text-right">
                  <Link href="/auth/reset-password">
                    <span className="text-blue-2 text-sm cursor-pointer hover:underline">
                      {t('forgot_password')}
                    </span>
                  </Link>
                </Col>
              </Row>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType={'submit'}
                size="large"
                className="antd-btn-shadow !rounded-md !h-[2.875rem]"
                block
              >
                {t('btn.login')}
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center text-sm font-montse">
            <div
              className="flex items-center mx-4 cursor-pointer hover:opacity-80"
              onClick={() => onToggleLanguageClick('jp')}
            >
              <img
                alt="Icon English"
                src="/icons/japan.svg"
                width={32}
                height={32}
              />
              <span className="ml-1">Japanese</span>
            </div>
            <div
              className="flex items-center mx-4 cursor-pointer hover:opacity-80"
              onClick={() => onToggleLanguageClick('en')}
            >
              <img
                alt="Icon English"
                src="/icons/english.svg"
                width={32}
                height={32}
              />
              <span className="ml-1 font-bold">English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
