export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-1">
      <div className="font-lato text-2xl">Lato: Hello Lato</div>
      <div className="font-cinzel text-2xl">Cinzel: Hello Cinzel</div>
      <div className="font-great-vibes text-3xl">
        Great Vibes: Hello Great Vibes
      </div>
      <div className="font-playfair text-2xl">
        Playfair Display: Hello Playfair Display
      </div>
      <div className="grid grid-cols-8  gap-2">
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full bg-primary border-2"></div>
          <div>Primary</div>
        </div>  
        <div className="flex flex-col items-center" >
          <div className="size-14 rounded-full bg-secondary border-2"></div>
          <div>Secondary</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full bg-heading border-2"></div>
          <div>Heading</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full bg-red border-2"></div>
          <div>Red</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full linear-gradient  border-2"></div>
          <div>Linear Gradient</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full linear-gradient-2  border-2"></div>
          <div>Linear Gradient 2</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full linear-gradient-3  border-2"></div>
          <div>Linear Gradient 3</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full bg-body  border-2"></div>
          <div>Body</div>
        </div>
      </div>
      <div className="text-playfair-semibold-18">Playfair SemiBold 18: Hello Playfair SemiBold 18</div>
      <div className="text-playfair-semibold-24">Playfair SemiBold 24: Hello Playfair SemiBold 24</div>
      <div className="text-playfair-medium-22">Playfair Medium 22: Hello Playfair Medium 22</div>
      <div className="text-playfair-medium-58">Playfair Medium 58: Hello Playfair Medium 58</div>
      <div className="text-playfair-medium-62">Playfair Medium 62: Hello Playfair Medium 62</div>
      <div className="text-playfair-extrabold-62">Playfair ExtraBold 62: Hello Playfair ExtraBold 62</div>
      <div className="text-playfair-bold-28">Playfair Bold 28: Hello Playfair Bold 28</div>
      <div className="text-lato-regular-14  ">Lato Regular 14: Hello Lato Regular 14</div>
      <div className="text-lato-regular-16">Lato Regular 16: Hello Lato Regular 16</div>
      <div className="text-lato-regular-18">Lato Regular 18: Hello Lato Regular 18</div>
      <div className="text-lato-regular-26">Lato Regular 26: Hello Lato Regular 26</div>
      <div className="text-lato-regular-22">Lato Regular 22: Hello Lato Regular 22</div>
      <div className="text-lato-semibold-16">Lato SemiBold 16: Hello Lato SemiBold 16</div>
      <div className="text-great-vibes-regular-26">Great Vibes Regular 26: Hello Great Vibes Regular 26</div>
      <div className="text-great-vibes-regular-32">Great Vibes Regular 32: Hello Great Vibes Regular 32</div>
      <div className="text-cinzel-bold-34">Cinzel Bold 34: Hello Cinzel Bold 34</div>
    </div>
  );
}
