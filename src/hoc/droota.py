
import webbrowser

def main():
    print("👋 Hello there!")
    name = input("What's your name? ")

    print(f"\nNice to meet you, {name}!")
    reason = input("Why do you want to use the Droota website? ")

    print(f"\n🚀 Awesome! '{reason}' is a great reason to use Droota.")
    
    open_site = input("Would you like to open the Droota website now? (yes/no): ").strip().lower()
    if open_site in ['yes', 'y']:
        print("Opening Droota for you... 🌐")
        webbrowser.open("https://www.droota.com")
    else:
        print("No worries! You can visit it anytime at https://www.droota.com")
    
    print("\n✅ Thank you for using the Droota Helper! See you soon!")

if __name__ == "__main__":
    main()
