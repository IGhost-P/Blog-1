interface IuseNavProps {
  ref: React.RefObject<HTMLInputElement>;
}

export function useNavScroll({ ref }: IuseNavProps) {
  const onScroll = () => {
    let prevScrollPos = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY;

      if (ref) {
        const { current } = ref;

        if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
          current!.style.top = '0';
        } else {
          current!.style.top = '-50px';
        }

        prevScrollPos = currentScrollPos;
      }
    });
  };

  return { onScroll };
}
