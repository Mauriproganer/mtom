import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, CheckCircle2, CreditCard, LockKeyhole, Minus, Plus, Trash2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice, priceToNumber, useCart } from "@/lib/cart-context";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizar compra — M to M Estética" },
      { name: "description", content: "Revise su selección y complete un pedido de demostración de M to M Estética." },
      { property: "og:title", content: "Finalizar compra — M to M Estética" },
      { property: "og:description", content: "Checkout de demostración para la colección de belleza mediterránea M to M." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [accepted, setAccepted] = useState(false);
  const [complete, setComplete] = useState(false);
  const shipping = subtotal > 0 && subtotal < 75 ? 4.95 : 0;
  const total = subtotal + shipping;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accepted || items.length === 0) return;
    setComplete(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (complete) {
    return (
      <main className="grid min-h-screen place-items-center bg-creme px-6 py-16 text-center text-taupe">
        <div className="max-w-lg">
          <CheckCircle2 className="mx-auto size-12 text-gold" strokeWidth={1.25} />
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold">Pedido de demostración confirmado</p>
          <h1 className="mt-4 font-serif text-5xl">Gracias por elegir M TO M</h1>
          <p className="mt-5 text-sm leading-relaxed text-taupe/65">Esta compra era una simulación. No se ha realizado ningún cobro ni se han guardado tus datos.</p>
          <Button asChild className="mt-8 h-11 rounded-none bg-taupe px-8 text-creme hover:bg-gold"><Link to="/">Volver a la tienda</Link></Button>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-creme text-taupe">
      <header className="border-b border-taupe/10 px-6">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Button asChild variant="ghost" className="px-0 text-xs uppercase tracking-[0.12em]"><Link to="/"><ArrowLeft /> Volver</Link></Button>
            <img src={logoAsset.url} alt="M to M Estética" className="size-14 object-contain" />
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-taupe/50"><LockKeyhole className="size-3.5" /> Seguro</div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:py-16">
        <section>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Último paso</p>
          <h1 className="mt-3 font-serif text-5xl">Finalizar compra</h1>
          <div className="mt-7 flex items-start gap-3 border border-gold/25 bg-nude p-4 text-xs leading-relaxed text-taupe/70">
            <CreditCard className="mt-0.5 size-4 shrink-0 text-gold" />
            Demostración segura: utiliza datos ficticios. Este formulario no cobra ni almacena información.
          </div>

          <form id="checkout-form" onSubmit={submit} className="mt-10 space-y-10">
            <fieldset>
              <legend className="font-serif text-2xl">Datos de contacto</legend>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Nombre completo" autoComplete="name" required />
                <Field id="email" label="Correo electrónico" type="email" autoComplete="email" required />
                <Field id="phone" label="Teléfono" type="tel" autoComplete="tel" required className="sm:col-span-2" />
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-serif text-2xl">Dirección de envío</legend>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field id="address" label="Dirección" autoComplete="street-address" required className="sm:col-span-2" />
                <Field id="city" label="Ciudad" autoComplete="address-level2" required />
                <Field id="postal" label="Código postal" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}" required />
                <Field id="province" label="Provincia" autoComplete="address-level1" required />
                <Field id="country" label="País" defaultValue="España" autoComplete="country-name" required />
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-serif text-2xl">Pago de demostración</legend>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field id="card" label="Número de tarjeta" inputMode="numeric" autoComplete="cc-number" placeholder="4242 4242 4242 4242" pattern="[0-9 ]{15,19}" required className="sm:col-span-2" />
                <Field id="expiry" label="Vencimiento" autoComplete="cc-exp" placeholder="MM/AA" pattern="(0[1-9]|1[0-2])/[0-9]{2}" required />
                <Field id="cvv" label="CVV" inputMode="numeric" autoComplete="cc-csc" placeholder="123" pattern="[0-9]{3,4}" required />
              </div>
            </fieldset>

            <div className="flex items-start gap-3">
              <button
                id="consent"
                type="button"
                role="checkbox"
                aria-checked={accepted}
                onClick={() => setAccepted((current) => !current)}
                className={`grid size-4 shrink-0 place-content-center rounded-sm border border-taupe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${accepted ? "bg-taupe text-creme" : "bg-creme text-taupe"}`}
              >
                {accepted ? <Check className="size-3.5" aria-hidden="true" /> : null}
              </button>
              <Label htmlFor="consent" className="text-xs font-normal leading-relaxed text-taupe/65">Confirmo que usaré datos ficticios y entiendo que no se realizará ningún cobro.</Label>
            </div>
          </form>
        </section>

        <aside className="h-fit border border-taupe/10 bg-stone-muted/35 p-6 lg:sticky lg:top-8">
          <h2 className="font-serif text-3xl">Tu pedido</h2>
          {items.length === 0 ? (
            <div className="py-12 text-center"><p className="text-sm text-taupe/60">Tu carrito está vacío.</p><Button asChild variant="outline" className="mt-5 rounded-none bg-transparent"><Link to="/">Ver productos</Link></Button></div>
          ) : (
            <>
              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div key={item.name} className="grid grid-cols-[3.5rem_1fr_auto] gap-3 border-b border-taupe/10 pb-5">
                    <img src={item.image} alt="" className="aspect-[4/5] w-full rounded-md object-cover" />
                    <div><p className="text-[11px] font-medium uppercase">{item.name}</p><div className="mt-2 inline-flex items-center border border-taupe/15"><Button type="button" variant="ghost" size="icon" className="size-6 rounded-none" onClick={() => updateQuantity(item.name, item.quantity - 1)} aria-label="Restar"><Minus /></Button><span className="w-6 text-center text-xs">{item.quantity}</span><Button type="button" variant="ghost" size="icon" className="size-6 rounded-none" onClick={() => updateQuantity(item.name, item.quantity + 1)} aria-label="Sumar"><Plus /></Button></div></div>
                    <div className="text-right"><p className="font-serif text-sm">{formatPrice(priceToNumber(item.price) * item.quantity)}</p><Button type="button" variant="ghost" size="icon" className="mt-1 size-7 text-taupe/45" onClick={() => removeItem(item.name)} aria-label="Eliminar"><Trash2 /></Button></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm"><div className="flex justify-between"><span className="text-taupe/60">Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between"><span className="text-taupe/60">Envío</span><span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span></div><div className="flex justify-between border-t border-taupe/15 pt-4 font-serif text-2xl"><span>Total</span><span>{formatPrice(total)}</span></div></div>
              <Button form="checkout-form" type="submit" disabled={!accepted} className="mt-7 h-12 w-full rounded-none bg-taupe uppercase tracking-[0.14em] text-creme hover:bg-gold">Confirmar pedido de prueba</Button>
            </>
          )}
        </aside>
      </main>
    </div>
  );
}

function Field({ id, label, className, ...props }: React.ComponentProps<typeof Input> & { id: string; label: string }) {
  return <div className={className}><Label htmlFor={id} className="mb-2 block text-[10px] uppercase tracking-[0.12em]">{label}</Label><Input id={id} {...props} className="h-11 rounded-none border-taupe/20 bg-transparent shadow-none focus-visible:ring-gold" /></div>;
}