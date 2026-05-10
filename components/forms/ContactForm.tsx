"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-6 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors disabled:opacity-60"
    >
      {pending ? "Enviando…" : "Enviar consulta"}
    </button>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-xs text-red-600">
      {message}
    </p>
  );
}

const initialState: ContactFormState = { success: false };

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, initialState);

  if (state.success && state.message) {
    return (
      <div
        role="status"
        className="p-6 bg-ivory border border-ivory-dark rounded-lg text-center"
      >
        <p className="text-navy font-medium">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
          Nombre completo <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className="w-full border border-ivory-dark rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
        />
        <FieldError message={state.errors?.name} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
          Correo electrónico <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-ivory-dark rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
        />
        <FieldError message={state.errors?.email} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
          Teléfono <span aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full border border-ivory-dark rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
        />
        <FieldError message={state.errors?.phone} />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-charcoal mb-1">
          Área jurídica <span aria-hidden="true">*</span>
        </label>
        <select
          id="area"
          name="area"
          required
          className="w-full border border-ivory-dark rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
        >
          <option value="">Selecciona una opción</option>
          <option value="laboral">Derecho laboral</option>
          <option value="civil">Derecho civil</option>
          <option value="otro">Otro</option>
        </select>
        <FieldError message={state.errors?.area} />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-1">
          Descripción del asunto <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          minLength={30}
          className="w-full border border-ivory-dark rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white resize-y"
          placeholder="Describe brevemente tu situación jurídica (mínimo 30 caracteres)"
        />
        <FieldError message={state.errors?.description} />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 accent-accent"
        />
        <label htmlFor="consent" className="text-sm text-charcoal/80 leading-relaxed">
          He leído y acepto la{" "}
          <a href="/politica-privacidad" className="text-accent underline hover:no-underline">
            política de privacidad
          </a>
          .
        </label>
      </div>
      <FieldError message={state.errors?.consent} />

      <SubmitButton />
    </form>
  );
}
