import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { formatPrice, priceToNumber, useCart } from "@/lib/cart-context";

export function CartPanel() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label={`Abrir carrito, ${itemCount} ${itemCount === 1 ? "unidad" : "unidades"}`} className="fixed bottom-5 right-5 z-40 h-14 rounded-full bg-taupe px-5 text-creme shadow-soft hover:bg-gold sm:bottom-7 sm:right-7">
          <ShoppingBag aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.12em]">Carrito</span>
          {itemCount > 0 && <span className="grid size-6 place-items-center rounded-full bg-creme text-xs text-taupe">{itemCount}</span>}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col bg-creme p-0 sm:max-w-md">
        <SheetHeader className="border-b border-taupe/10 p-6 pr-12">
          <SheetTitle className="font-serif text-3xl font-normal">Tu carrito</SheetTitle>
          <SheetDescription>{itemCount ? `${itemCount} ${itemCount === 1 ? "producto" : "productos"}` : "Aún no has añadido productos"}</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="grid flex-1 place-content-center px-8 text-center">
            <ShoppingBag className="mx-auto mb-5 size-9 text-gold" strokeWidth={1.25} />
            <p className="font-serif text-2xl">Tu ritual empieza aquí</p>
            <p className="mt-2 text-sm text-taupe/60">Explora las colecciones y añade tus favoritos.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              {items.map((item) => (
                <div key={item.name} className="grid grid-cols-[4.5rem_1fr_auto] gap-4 border-b border-taupe/10 pb-5">
                  <img src={item.image} alt="" className="aspect-[4/5] w-full rounded-md object-cover" />
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.16em] text-gold">{item.category}</p>
                    <p className="mt-1 text-xs font-medium uppercase">{item.name}</p>
                    <p className="mt-2 font-serif text-sm italic">{formatPrice(priceToNumber(item.price) * item.quantity)}</p>
                    <div className="mt-3 inline-flex h-8 items-center border border-taupe/15">
                      <Button variant="ghost" size="icon" className="size-7 rounded-none" onClick={() => updateQuantity(item.name, item.quantity - 1)} aria-label={`Restar una unidad de ${item.name}`}><Minus /></Button>
                      <span className="w-7 text-center text-xs">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="size-7 rounded-none" onClick={() => updateQuantity(item.name, item.quantity + 1)} aria-label={`Añadir una unidad de ${item.name}`}><Plus /></Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="size-8 text-taupe/50 hover:text-destructive" onClick={() => removeItem(item.name)} aria-label={`Eliminar ${item.name}`}><Trash2 /></Button>
                </div>
              ))}
            </div>
            <div className="border-t border-taupe/10 bg-stone-muted/45 p-6">
              <div className="mb-5 flex items-end justify-between">
                <span className="text-xs uppercase tracking-[0.15em]">Subtotal</span>
                <strong className="font-serif text-2xl font-normal">{formatPrice(subtotal)}</strong>
              </div>
              <SheetClose asChild>
                <Button asChild className="h-12 w-full rounded-none bg-taupe uppercase tracking-[0.15em] text-creme hover:bg-gold"><Link to="/checkout">Finalizar compra</Link></Button>
              </SheetClose>
              <Button variant="ghost" className="mt-2 w-full text-xs text-taupe/55" onClick={clearCart}>Vaciar carrito</Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}