/* Visual Toast Function (Moved here so it knows the exact calculated score) */
function showMarksToast(marksValue) {
    const existing = document.getElementById('examcloud-marks-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'examcloud-marks-toast';
    toast.innerText = marksValue;

    Object.assign(toast.style, {
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '15px 40px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: '#fff',
        fontSize: '48px', 
        fontWeight: 'bold',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        zIndex: '999999',
        pointerEvents: 'none', 
        opacity: '1',
        transition: 'opacity 0.2s ease-out' 
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, 800);
}

/* Listen for keyboard actions */
window.addEventListener("message", function(event) {

    if (event.source !== window) return;
    if (!event.data || event.data.source !== "examcloud-extension") return;

    // --- Helpers to get current values from the page ---
    function getCurrentScore() {
        const input = document.getElementById("txtscore");
        return input && input.value ? parseFloat(input.value) : 0;
    }

    function getMaxScore() {
        const maxEl = document.getElementById("totscore");
        return maxEl && maxEl.innerText ? parseFloat(maxEl.innerText) : Infinity;
    }

    // --- Actions ---
    if (event.data.action === "NEXT") {
        if (typeof nav_adoc === "function") nav_adoc("N");
    }

    if (event.data.action === "PREV") {
        if (typeof nav_adoc === "function") nav_adoc("P");
    }

    if (event.data.action === "MARKS") {
        if (typeof setMarks === "function") {
            let val = parseFloat(event.data.value);
            let max = getMaxScore();
            
            if (val > max) val = max; 
            
            setMarks(val);
            showMarksToast(val); // Show the final score
        }
    }
if (event.data.action === "INCREMENT") {
        let newScore = getCurrentScore() + parseFloat(event.data.value); 
        let max = getMaxScore();
        
        if (newScore > max) newScore = max;
        
        // Force the input to update instantly so rapid keystrokes stack correctly
        const input = document.getElementById("txtscore");
        if (input) input.value = newScore;

        if (typeof setMarks === "function") {
            setMarks(newScore);
        }
        showMarksToast(newScore); 
    }

    if (event.data.action === "DECREMENT") {
        let newScore = getCurrentScore() - parseFloat(event.data.value); 
        
        if (newScore < 0) newScore = 0;
        
        // Force the input to update instantly
        const input = document.getElementById("txtscore");
        if (input) input.value = newScore;

        if (typeof setMarks === "function") {
            setMarks(newScore);
        }
        showMarksToast(newScore); 
    }
    
    // Also update MARKS just to be safe!
    if (event.data.action === "MARKS") {
        let val = parseFloat(event.data.value);
        let max = getMaxScore();
        
        if (val > max) val = max; 
        
        const input = document.getElementById("txtscore");
        if (input) input.value = val;

        if (typeof setMarks === "function") {
            setMarks(val);
        }
        showMarksToast(val); 
    }
});