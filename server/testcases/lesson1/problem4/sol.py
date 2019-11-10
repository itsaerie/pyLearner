def absMax(x, y, z):
    print(max(abs(x), abs(y), abs(z)))
import sys
if __name__ == "__main__":
    absMax(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))