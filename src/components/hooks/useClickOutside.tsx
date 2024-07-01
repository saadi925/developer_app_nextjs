import React, { useEffect } from 'react'

export default function useClickOutside(ref : React.RefObject<any>, onClose : () => void, isOpen : boolean ) {
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
         onClose()
        }
      };
    
      useEffect(() => {
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);
      
}
