import os
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


def generate_missing_md_files(summary_file, base_dir):
    with open(summary_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    updated_lines = []
    for line in lines:
        if '(' in line and ')' in line:
            start_idx = line.find('(') + 1
            end_idx = line.find(')')
            relative_path = line[start_idx:end_idx].strip()

            if not relative_path:  # If the path is empty, generate a filename
                title_start_idx = line.find('[') + 1
                title_end_idx = line.find(']')
                title = line[title_start_idx:title_end_idx].strip()
                title = re.sub(r'[^\w\s-]', '', title)  # Remove non-alphanumeric characters
                title = title.replace(' ', '-')  # Replace spaces with hyphens
                relative_path = f"{title.lower()}.md"
                line = line[:start_idx] + relative_path + line[end_idx:]  # Update the line with the new path

            file_path = os.path.join(base_dir, relative_path)

            if relative_path.endswith('.md') and not os.path.exists(file_path):
                # Print the file path and the updated line for confirmation
                print(f'File to be created: {file_path}')
                print(f'Updated line: {line}')
                # Uncomment the following lines to actually create the files and update the summary file
                # Create directories if they do not exist
                # os.makedirs(os.path.dirname(file_path), exist_ok=True)
                # Create the .md file
                # with open(file_path, 'w', encoding='utf-8') as md_file:
                #     md_file.write(f'# {os.path.basename(file_path).replace("-", " ").replace(".md", "")}\n')
                # print(f'Created: {file_path}')
        
        updated_lines.append(line)

    # Print the updated lines for confirmation
    print("Updated lines to be written back to the summary file:")
    for updated_line in updated_lines:
        print(updated_line, end='')

if __name__ == "__main__":
    summary_file = r'G:\among anki\_00_Github\Shige-Addons\shige-addons-wiki\shige-addons-wiki\src\SUMMARY.md'
    base_dir = r'G:\among anki\_00_Github\Shige-Addons\shige-addons-wiki\shige-addons-wiki\src'
    generate_missing_md_files(summary_file, base_dir)