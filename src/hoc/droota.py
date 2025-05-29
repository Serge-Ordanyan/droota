import webbrowser
import datetime
from colorama import init, Fore, Style

# Initialize colorama
init(autoreset=True)

def log_user_interaction(name, reason):
    with open("droota_log.txt", "a") as f:
        f.write(f"{datetime.datetime.now()} - Name: {name}, Reason: {reason}\n")

def main():
    print(Fore.CYAN + "👋 Hello there!")
    name = input(Fore.YELLOW + "What's your name? ")

    print(Fore.GREEN + f"\nNice to meet you, {name}!")
    reason = input(Fore.YELLOW + "Why do you want to use the Droota website? ")

    print(Fore.BLUE + f"\n🚀 Awesome! '{reason}' is a great reason to use Droota.")
    
    log_user_interaction(name, reason)

    print(Fore.MAGENTA + "\n❓ Do you know what Droota offers?")
    print("  A. Healthcare job platform")
    print("  B. Online gaming")
    print("  C. Food delivery")
    choice = input(Fore.YELLOW + "Your guess (A/B/C): ").strip().upper()

    if choice == "A":
        print(Fore.GREEN + "✅ Correct! Droota helps healthcare professionals connect with opportunities.")
    else:
        print(Fore.RED + "❌ Oops! The correct answer is A — Healthcare job platform.")

    open_site = input(Fore.YELLOW + "\nWould you like to open the Droota website now? (yes/no): ").strip().lower()
    if open_site in ['yes', 'y']:
        print(Fore.CYAN + "Opening Droota for you... 🌐")
        webbrowser.open("https://www.droota.com")
    else:
        print(Fore.CYAN + "No worries! You can visit it anytime at https://www.droota.com")

    print(Fore.GREEN + "\n🌟 Thank you for using the Droota Helper! Have an amazing day!")
    print(Fore.LIGHTBLUE_EX + r"""
     _____                     _        
    |  __ \                   | |       
    | |  | | ___  ___ ___   __| | ___   
    | |  | |/ _ \/ __/ _ \ / _` |/ _ \  
    | |__| |  __/ (_| (_) | (_| | (_) | 
    |_____/ \___|\___\___/ \__,_|\___/  
    """)

if __name__ == "__main__":
    main()

